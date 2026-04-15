'use client';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

interface RadarChartProps {
  data: {
    Faith: number;
    Grit: number;
    Presence: number;
    Devotion: number;
    Connection: number;
    Introspection: number;
  };
}

export default function PersonalityRadarChart({ data }: RadarChartProps) {
  const chartData = [
    { name: 'Faith', value: data.Faith, label: '信仰', fullMark: 100 },
    { name: 'Grit', value: data.Grit, label: '韧性', fullMark: 100 },
    { name: 'Presence', value: data.Presence, label: '感官', fullMark: 100 },
    { name: 'Devotion', value: data.Devotion, label: '深情', fullMark: 100 },
    { name: 'Connection', value: data.Connection, label: '连结', fullMark: 100 },
    { name: 'Introspection', value: data.Introspection, label: '反省', fullMark: 100 },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <ResponsiveContainer width="100%" aspect={1}>
        <RadarChart data={chartData} margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
          <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: '#c9a96e', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: 'rgba(232, 228, 220, 0.5)', fontSize: 10 }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.05)' }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.05)' }}
          />
          <Radar
            name="Your Type"
            dataKey="value"
            stroke="#c9a96e"
            strokeWidth={2}
            fill="rgba(201, 169, 110, 0.3)"
            fillOpacity={1}
            dot={{ r: 4, fill: '#c9a96e', strokeWidth: 0 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 维度标签组件
export function DimensionLabels({ data }: RadarChartProps) {
  const dimensions = [
    { key: 'Faith', name: 'Faith', label: '信仰', color: '#7b9cce' },
    { key: 'Grit', name: 'Grit', label: '韧性', color: '#c47a7a' },
    { key: 'Presence', name: 'Presence', label: '感官', color: '#7cbf8c' },
    { key: 'Devotion', name: 'Devotion', label: '深情', color: '#9b7cc4' },
    { key: 'Connection', name: 'Connection', label: '连结', color: '#c4a87c' },
    { key: 'Introspection', name: 'Introspection', label: '反省', color: '#7cc4be' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mt-8">
      {dimensions.map((dim) => (
        <div key={dim.key} className="text-center">
          <div className="font-space-mono text-xs text-text-dim mb-1">
            {dim.name}
          </div>
          <div className="font-noto-serif text-sm text-text mb-1">
            {dim.label}
          </div>
          <div className="font-space-mono text-lg font-bold" style={{ color: dim.color }}>
            {data[dim.key as keyof typeof data]}%
          </div>
        </div>
      ))}
    </div>
  );
}
