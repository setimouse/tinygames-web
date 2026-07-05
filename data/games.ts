export interface Game {
  id: string;
  name: string;
  nameEn: string;
  category: 'single' | 'board';
  description: string;
  features: string[];
  icon: string;
  hasAI: boolean;
}

const games: Game[] = [
  {
    id: 'sudoku',
    name: '数独',
    nameEn: 'Sudoku',
    category: 'single',
    description: '三种难度·笔记模式·逻辑推理',
    features: ['三种难度', '笔记模式', '安全保护'],
    icon: '🧩',
    hasAI: false,
  },
  {
    id: 'mine',
    name: '扫雷',
    nameEn: 'Minesweeper',
    category: 'single',
    description: '经典布雷·递归展开·首次点击保护',
    features: ['递归展开', '安全保护', '计时挑战'],
    icon: '💣',
    hasAI: false,
  },
  {
    id: 'game2048',
    name: '2048',
    nameEn: '2048',
    category: 'single',
    description: '滑动合成·冲击高分·极简规则',
    features: ['滑动操作', '高分挑战', '极简设计'],
    icon: '🔢',
    hasAI: false,
  },
  {
    id: 'tetris',
    name: '俄罗斯方块',
    nameEn: 'Tetris',
    category: 'single',
    description: '经典下落·反应速度·空间规划',
    features: ['经典玩法', '速度挑战', '计分系统'],
    icon: '🧱',
    hasAI: false,
  },
  {
    id: 'breakout',
    name: '打砖块',
    nameEn: 'Breakout',
    category: 'single',
    description: '十种关卡·物理碰撞·弹射反馈',
    features: ['十种关卡', '物理引擎', '真实弹射'],
    icon: '🏓',
    hasAI: false,
  },
  {
    id: 'gomoku',
    name: '五子棋',
    nameEn: 'Gomoku',
    category: 'board',
    description: '双人对战·AI引擎·离线畅玩',
    features: ['双人对战', 'AI引擎', '离线畅玩'],
    icon: '⚫',
    hasAI: true,
  },
  {
    id: 'chess',
    name: '国际象棋',
    nameEn: 'Chess',
    category: 'board',
    description: 'Alpha-Beta剪枝·三档难度·AI对战',
    features: ['Alpha-Beta', '三档难度', 'AI对战'],
    icon: '♚',
    hasAI: true,
  },
  {
    id: 'xiangqi',
    name: '中国象棋',
    nameEn: 'Xiangqi',
    category: 'board',
    description: '经典规则·AI引擎·离线对战',
    features: ['经典规则', 'AI引擎', '离线对战'],
    icon: '🐴',
    hasAI: true,
  },
  {
    id: 'checkers',
    name: '西洋跳棋',
    nameEn: 'Checkers',
    category: 'board',
    description: '经典跳棋·AI引擎·双人对弈',
    features: ['经典跳棋', 'AI引擎', '双人对弈'],
    icon: '🔴',
    hasAI: true,
  },
];

export const singleGames = games.filter((g) => g.category === 'single');
export const boardGames = games.filter((g) => g.category === 'board');

export default games;
