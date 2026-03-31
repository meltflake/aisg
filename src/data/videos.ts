// 新加坡 AI 视频观点数据

export interface VideoItem {
  id: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  speakerType: 'government' | 'academic' | 'industry';
  date: string;
  duration: string;
  summary: string;
  topic: string;
  youtubeUrl: string;
  channel: string;
}

export interface VideoCategory {
  name: string;
  icon: string;
  description: string;
}

export const VIDEO_CATEGORIES: VideoCategory[] = [
  {
    name: 'AI 战略与愿景',
    icon: 'tabler:target',
    description: '国家 AI 战略规划、Smart Nation 愿景',
  },
  {
    name: 'AI 治理与监管',
    icon: 'tabler:scale',
    description: 'AI 伦理、法规、安全框架',
  },
  {
    name: 'AI 人才与教育',
    icon: 'tabler:school',
    description: 'AI 人才培养、教育计划',
  },
  {
    name: 'AI 产业与应用',
    icon: 'tabler:building',
    description: '行业应用、企业实践、创业',
  },
  {
    name: '国际合作与对标',
    icon: 'tabler:world',
    description: '跨国合作、国际会议、区域比较',
  },
];

export const SPEAKER_TYPE_LABELS: Record<string, string> = {
  government: '政府官员',
  academic: '学者',
  industry: '行业领袖',
};

export const videos: VideoItem[] = [
  // 初始数据将在后续任务中通过采集填入
];
