import React, { useState } from 'react';

const nodes = [
  { id: '1', text: '节点-1', x: 100, y: 100 },
  { id: '2', text: '节点-2', x: 200, y: 200 },
  { id: '3', text: '节点-3', x: 300, y: 100 },
  // 更多节点...
];

const edges = [
  { from: '1', to: '2' },
  { from: '2', to: '3' },
  // 更多边...
];

const Graph = () => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const handleNodeClick = (id) => {
    setSelectedNodeId(id);
  };

  const getNodeStyle = (node) => {
    const isSelected = node.id === selectedNodeId;
    return {
      transform: isSelected ? 'scale(1.5)' : 'scale(1)',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    };
  };

  return (
    <svg width="800" height="600">
      {edges.map((edge) => {
        const fromNode = nodes.find((node) => node.id === edge.from);
        const toNode = nodes.find((node) => node.id === edge.to);

        // 确保 fromNode 和 toNode 都存在
        if (fromNode && toNode) {
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="black"
            />
          );
        }
        return null; // 如果没有有效的节点，返回 null
      })}
      {nodes.map((node) => (
        <g
          key={node.id}
          transform={`translate(${node.x}, ${node.y})`}
          onClick={() => handleNodeClick(node.id)}
        >
          <circle
            r={20}
            fill={node.id === selectedNodeId ? 'orange' : 'lightblue'}
            style={getNodeStyle(node)}
          />
          <text textAnchor="middle" y="5" style={{ fontSize: '12px' }}>
            {node.text}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Graph;
