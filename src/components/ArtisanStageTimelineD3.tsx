import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { CommissionStage } from '../types';

interface ArtisanStageTimelineD3Props {
  stages: CommissionStage[];
  progressPercent: number;
  totalHours: number;
  currentStageHours: number;
  onSelectStage?: (index: number) => void;
  selectedStageIndex?: number;
}

export const ArtisanStageTimelineD3: React.FC<ArtisanStageTimelineD3Props> = ({
  stages,
  progressPercent,
  totalHours,
  currentStageHours,
  onSelectStage,
  selectedStageIndex,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredStage, setHoveredStage] = useState<{
    stage: CommissionStage;
    index: number;
    x: number;
    y: number;
  } | null>(null);

  // Short label names for concise timeline display
  const getStageShortName = (title: string, index: number): string => {
    if (title.toLowerCase().includes('drafting') || title.toLowerCase().includes('posture')) {
      return 'Posture Drafting';
    }
    if (title.toLowerCase().includes('loom') || title.toLowerCase().includes('weaving') || title.toLowerCase().includes('velvet')) {
      return 'Loom Weaving';
    }
    if (title.toLowerCase().includes('threadwork') || title.toLowerCase().includes('embroidery') || title.toLowerCase().includes('needlework')) {
      return 'Gold Embroidery';
    }
    if (title.toLowerCase().includes('assembly') || title.toLowerCase().includes('basting') || title.toLowerCase().includes('fitting')) {
      return 'Basting Assembly';
    }
    if (title.toLowerCase().includes('dispatch') || title.toLowerCase().includes('courier') || title.toLowerCase().includes('box')) {
      return 'White-Glove Box';
    }
    return `Stage 0${index + 1}`;
  };

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || stages.length === 0) return;

    const container = containerRef.current;
    const width = container.clientWidth || 700;
    const height = 150;
    const margin = { top: 35, right: 40, bottom: 45, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const centerY = margin.top + innerHeight / 2 - 4;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    svg.attr('viewBox', `0 0 ${width} ${height}`).attr('width', '100%').attr('height', height);

    // 1. Defs & Gradients
    const defs = svg.append('defs');

    // Rich gold gradient
    const goldGrad = defs
      .append('linearGradient')
      .attr('id', 'd3-timeline-gold')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');
    goldGrad.append('stop').attr('offset', '0%').attr('stop-color', '#c89d47');
    goldGrad.append('stop').attr('offset', '50%').attr('stop-color', '#e5c07b');
    goldGrad.append('stop').attr('offset', '100%').attr('stop-color', '#ffdd9f');

    // Subtle dark track gradient
    const trackGrad = defs
      .append('linearGradient')
      .attr('id', 'd3-timeline-track')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');
    trackGrad.append('stop').attr('offset', '0%').attr('stop-color', '#1c1b1b');
    trackGrad.append('stop').attr('offset', '100%').attr('stop-color', '#262626');

    // Glow filter
    const filter = defs
      .append('filter')
      .attr('id', 'd3-gold-glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');
    filter
      .append('feGaussianBlur')
      .attr('in', 'SourceGraphic')
      .attr('stdDeviation', 4)
      .attr('result', 'blur');
    filter
      .append('feMerge')
      .selectAll('feMergeNode')
      .data(['blur', 'SourceGraphic'])
      .enter()
      .append('feMergeNode')
      .attr('in', (d) => d);

    // 2. Scale
    const xScale = d3
      .scaleLinear()
      .domain([0, stages.length - 1])
      .range([margin.left, width - margin.right]);

    // 3. Background Track
    const trackGroup = svg.append('g').attr('class', 'track-group');

    // Outer architectural rail
    trackGroup
      .append('line')
      .attr('x1', margin.left)
      .attr('y1', centerY)
      .attr('x2', width - margin.right)
      .attr('y2', centerY)
      .attr('stroke', '#222222')
      .attr('stroke-width', 6)
      .attr('stroke-linecap', 'square');

    // Inner subtle groove
    trackGroup
      .append('line')
      .attr('x1', margin.left)
      .attr('y1', centerY)
      .attr('x2', width - margin.right)
      .attr('y2', centerY)
      .attr('stroke', 'rgba(255, 255, 255, 0.05)')
      .attr('stroke-width', 2);

    // Milestone hash tick marks along track
    const totalTicks = 20;
    const tickScale = d3.scaleLinear().domain([0, totalTicks]).range([margin.left, width - margin.right]);
    for (let i = 0; i <= totalTicks; i++) {
      trackGroup
        .append('line')
        .attr('x1', tickScale(i))
        .attr('y1', centerY - 4)
        .attr('x2', tickScale(i))
        .attr('y2', centerY + 4)
        .attr('stroke', 'rgba(255, 255, 255, 0.08)')
        .attr('stroke-width', 1);
    }

    // 4. Active Progress Line (Filled based on progressPercent)
    // Find index of current stage or calculate fractional progress
    const activeStageIndex = stages.findIndex((s) => s.current);
    const completedCount = stages.filter((s) => s.completed).length;
    
    // Calculate progress X coordinate
    const targetProgressX = margin.left + (innerWidth * Math.min(100, Math.max(0, progressPercent))) / 100;

    const progressLine = trackGroup
      .append('line')
      .attr('x1', margin.left)
      .attr('y1', centerY)
      .attr('x2', margin.left) // start at origin for animation
      .attr('y2', centerY)
      .attr('stroke', 'url(#d3-timeline-gold)')
      .attr('stroke-width', 4)
      .attr('stroke-linecap', 'square')
      .attr('filter', 'url(#d3-gold-glow)');

    // Animate progress line
    progressLine
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr('x2', targetProgressX);

    // Glowing spark at leading edge
    const spark = trackGroup
      .append('circle')
      .attr('cx', margin.left)
      .attr('cy', centerY)
      .attr('r', 4)
      .attr('fill', '#ffffff')
      .attr('filter', 'url(#d3-gold-glow)')
      .attr('opacity', 0.9);

    spark
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr('cx', targetProgressX);

    // 5. Stage Nodes & Labels
    const nodesGroup = svg.append('g').attr('class', 'nodes-group');

    stages.forEach((stage, i) => {
      const cx = xScale(i);
      const cy = centerY;
      const isCompleted = stage.completed;
      const isCurrent = stage.current;
      const isSelected = selectedStageIndex === i;

      const nodeG = nodesGroup
        .append('g')
        .attr('class', `stage-node stage-node-${i}`)
        .attr('cursor', 'pointer')
        .on('click', () => {
          onSelectStage?.(i);
        })
        .on('mouseenter', (event) => {
          const rect = container.getBoundingClientRect();
          setHoveredStage({
            stage,
            index: i,
            x: cx,
            y: cy - 25,
          });

          // Enlarge hovered node
          d3.select(`.node-shape-${i}`)
            .transition()
            .duration(200)
            .attr('transform', isCurrent ? 'scale(1.25)' : 'scale(1.2)');
        })
        .on('mouseleave', () => {
          setHoveredStage(null);
          d3.select(`.node-shape-${i}`)
            .transition()
            .duration(200)
            .attr('transform', 'scale(1)');
        });

      // Ambient beacon for current stage
      if (isCurrent) {
        // Pulsating outer aura ring
        const aura = nodeG
          .append('circle')
          .attr('cx', cx)
          .attr('cy', cy)
          .attr('r', 16)
          .attr('fill', 'none')
          .attr('stroke', '#e5c07b')
          .attr('stroke-width', 1.5)
          .attr('stroke-dasharray', '3 2')
          .attr('opacity', 0.8)
          .attr('filter', 'url(#d3-gold-glow)');

        // Animate aura pulse
        const pulse = () => {
          aura
            .transition()
            .duration(1600)
            .ease(d3.easeSinInOut)
            .attr('r', 22)
            .attr('opacity', 0.2)
            .transition()
            .duration(1600)
            .ease(d3.easeSinInOut)
            .attr('r', 16)
            .attr('opacity', 0.8)
            .on('end', pulse);
        };
        pulse();
      }

      // Selected ring indicator
      if (isSelected) {
        nodeG
          .append('rect')
          .attr('x', cx - 14)
          .attr('y', cy - 14)
          .attr('width', 28)
          .attr('height', 28)
          .attr('fill', 'none')
          .attr('stroke', '#ffdd9f')
          .attr('stroke-width', 1.5)
          .attr('transform', `rotate(45, ${cx}, ${cy})`);
      }

      // Base Node Container for scaling
      const shapeContainer = nodeG
        .append('g')
        .attr('class', `node-shape-${i}`)
        .attr('transform-origin', `${cx}px ${cy}px`);

      // Outer Diamond Base (Architectural Luxury 0px styling)
      shapeContainer
        .append('rect')
        .attr('x', cx - 10)
        .attr('y', cy - 10)
        .attr('width', 20)
        .attr('height', 20)
        .attr('transform', `rotate(45, ${cx}, ${cy})`)
        .attr(
          'fill',
          isCompleted
            ? '#ffdd9f'
            : isCurrent
            ? '#e5c07b'
            : '#181717'
        )
        .attr(
          'stroke',
          isCompleted
            ? '#ffffff'
            : isCurrent
            ? '#ffdd9f'
            : 'rgba(255, 255, 255, 0.15)'
        )
        .attr('stroke-width', isCurrent ? 2 : 1.5)
        .attr('filter', isCurrent ? 'url(#d3-gold-glow)' : 'none');

      // Inner icon or Roman numeral glyph
      if (isCompleted) {
        // Crisp checkmark icon
        shapeContainer
          .append('path')
          .attr(
            'd',
            `M ${cx - 4.5} ${cy} L ${cx - 1.5} ${cy + 3} L ${cx + 4.5} ${cy - 3}`
          )
          .attr('fill', 'none')
          .attr('stroke', '#412d00')
          .attr('stroke-width', 2)
          .attr('stroke-linecap', 'square');
      } else if (isCurrent) {
        // Active pulsing center dot
        shapeContainer
          .append('circle')
          .attr('cx', cx)
          .attr('cy', cy)
          .attr('r', 3)
          .attr('fill', '#412d00');
      } else {
        // Locked / future stage dot
        shapeContainer
          .append('circle')
          .attr('cx', cx)
          .attr('cy', cy)
          .attr('r', 2)
          .attr('fill', '#666666');
      }

      // Top Phase Label (e.g. "PHASE 01")
      nodeG
        .append('text')
        .attr('x', cx)
        .attr('y', cy - 19)
        .attr('text-anchor', 'middle')
        .attr('fill', isCurrent ? '#ffdd9f' : isCompleted ? '#e5c07b' : '#888888')
        .attr('font-size', '9px')
        .attr('font-family', 'ui-monospace, monospace')
        .attr('font-weight', isCurrent || isCompleted ? '700' : '500')
        .attr('letter-spacing', '0.12em')
        .text(`PHASE 0${i + 1}`);

      // Bottom Stage Title
      nodeG
        .append('text')
        .attr('x', cx)
        .attr('y', cy + 24)
        .attr('text-anchor', 'middle')
        .attr('fill', isCurrent ? '#ffffff' : isCompleted ? '#e5e2e1' : '#777777')
        .attr('font-size', '10px')
        .attr('font-family', 'sans-serif')
        .attr('font-weight', isCurrent ? '600' : '400')
        .text(getStageShortName(stage.title, i));

      // Hours or Status Tag
      const statusText = isCompleted
        ? `${stage.hoursLogged || 12}h done`
        : isCurrent
        ? `${stage.hoursLogged || currentStageHours}h active`
        : 'Pending';

      nodeG
        .append('text')
        .attr('x', cx)
        .attr('y', cy + 37)
        .attr('text-anchor', 'middle')
        .attr('fill', isCurrent ? '#e5c07b' : isCompleted ? '#a39886' : '#555555')
        .attr('font-size', '8.5px')
        .attr('font-family', 'ui-monospace, monospace')
        .attr('letter-spacing', '0.08em')
        .text(statusText);
    });
  }, [stages, progressPercent, totalHours, currentStageHours, selectedStageIndex]);

  // Responsive redraw on container resize
  useEffect(() => {
    const handleResize = () => {
      // Force trigger re-render
      if (svgRef.current && containerRef.current) {
        const width = containerRef.current.clientWidth || 700;
        d3.select(svgRef.current).attr('viewBox', `0 0 ${width} 150`);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full bg-[#112520]/60 border border-[rgba(229,192,123,0.3)] p-4 sm:p-5 overflow-hidden">
      {/* Top Header Information inside visualization container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-2 border-b border-[rgba(229,192,123,0.15)] gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ffdd9f] rounded-none"></span>
          <span className="text-[10px] tracking-[0.25em] text-[#ffdd9f] uppercase font-bold">
            Interactive D3 Artisan Progress Timeline
          </span>
          <span className="text-[9px] px-1.5 py-0.5 bg-[#201f1f] border border-[rgba(255,255,255,0.08)] text-[#d1c5b4] font-mono uppercase">
            Click Stage to Inspect
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-[#d1c5b4]">
            Overall Progress:{' '}
            <strong className="text-[#ffdd9f] font-bold">{progressPercent}%</strong>
          </span>
          <span className="text-[rgba(255,255,255,0.2)]">|</span>
          <span className="text-[#d1c5b4]">
            Logged:{' '}
            <strong className="text-white">
              {currentStageHours} / {totalHours} hrs
            </strong>
          </span>
        </div>
      </div>

      {/* D3 SVG Canvas */}
      <div ref={containerRef} className="relative w-full overflow-x-auto no-scrollbar">
        <svg
          ref={svgRef}
          className="w-full min-w-[580px] h-[150px] select-none block overflow-visible"
        />

        {/* Dynamic D3 Hover Card / Tooltip */}
        {hoveredStage && (
          <div
            className="absolute pointer-events-none z-30 bg-[#0e0e0e]/95 backdrop-blur-md border border-[#e5c07b] p-3 text-left shadow-2xl transition-all duration-150 transform -translate-x-1/2 -translate-y-full min-w-[240px] max-w-[280px]"
            style={{
              left: `${hoveredStage.x}px`,
              top: `${hoveredStage.y}px`,
            }}
          >
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-1.5 mb-1.5">
              <span className="text-[9px] text-[#ffdd9f] uppercase font-mono font-bold tracking-widest">
                Phase 0{hoveredStage.index + 1} •{' '}
                {hoveredStage.stage.completed
                  ? 'Completed'
                  : hoveredStage.stage.current
                  ? 'Active Handcraft'
                  : 'Upcoming'}
              </span>
              <span className="text-[10px] text-[#ffdd9f] font-mono font-bold">
                {hoveredStage.stage.hoursLogged
                  ? `${hoveredStage.stage.hoursLogged} hrs`
                  : '0 hrs'}
              </span>
            </div>
            <h4 className="font-serif text-[13px] uppercase text-[#e5e2e1] font-semibold leading-snug">
              {hoveredStage.stage.title}
            </h4>
            <p className="text-[11px] text-[#d1c5b4] font-light mt-1 leading-relaxed">
              {hoveredStage.stage.desc}
            </p>
            <div className="mt-2 text-[9px] text-[#ffdd9f] uppercase tracking-wider font-mono">
              Click node to spotlight phase details ↓
            </div>
          </div>
        )}
      </div>

      {/* Timeline Footnote Legend */}
      <div className="pt-2 mt-1 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap items-center justify-between text-[10px] text-[#9a8f80] gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#ffdd9f] rotate-45 border border-white"></span>
            <span>Artisan Milestone Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#e5c07b] rotate-45 border border-[#ffdd9f] shadow-[0_0_8px_#e5c07b]"></span>
            <span className="text-white font-medium">Active Needlework / Weaving</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#181717] rotate-45 border border-[rgba(255,255,255,0.2)]"></span>
            <span>Scheduled Guild Phase</span>
          </div>
        </div>

        <span className="font-mono text-[9px] text-[#ffdd9f]">
          Atelier Halogen Metric Array v2.6
        </span>
      </div>
    </div>
  );
};
