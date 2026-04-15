import type { Personality } from './types';

export const personalities: Record<string, Personality> = {
  AA: {
    code: 'AA',
    name: 'The Celestial Believer',
    nameCn: '天命信徒',
    tagline: '你是最早感知到信号的那颗星，也是最后一个愿意相信神话的人。',
    song: '《MAMA》',
    radar: { Faith: 98, Grit: 45, Presence: 50, Devotion: 75, Connection: 85, Introspection: 40 },
    analysis: `你对宇宙叙事有一种偏执的浪漫，这件事本身就很EXO。你身上有Suho式的东西——那种相信"守护"本身就是意义的确信感，不需要被看见，只要确信那个位置是自己的就够了。你是第一批入场的人，也是最后一个离场的人。当所有人都在问"还值得吗"，你已经不需要问了。MAMA前奏响起的时候，你会起鸡皮疙瘩，不是因为怀旧，是因为那个宇宙对你来说从来没有结束过。`
  },
  AB: {
    code: 'AB',
    name: 'The Sacred Survivor',
    nameCn: '圣徒幸存者',
    tagline: '你见过神话碎裂的样子，却选择用双手把碎片重新捧在一起。',
    song: '《History》',
    radar: { Faith: 90, Grit: 80, Presence: 35, Devotion: 65, Connection: 70, Introspection: 55 },
    analysis: `你经历过EXO最难的那段时间，没有走。这不是执念，是一种比执念更深的东西——Lay在那几年两边跑、累到极限也不说一个"走"字，你懂那是什么感觉。你爱EXO的方式里有一种"因为见过最坏的，所以更知道好的有多珍贵"的厚度。《History》是你的歌，不是因为它悦耳，而是因为它说的是你们一起走过的真实历史。`
  },
  AC: {
    code: 'AC',
    name: 'The Cosmic Wanderer',
    nameCn: '星际漫游者',
    tagline: '你相信宇宙有安排，但你不等宇宙，你先出发。',
    song: '《Power》',
    radar: { Faith: 85, Grit: 40, Presence: 80, Devotion: 50, Connection: 65, Introspection: 35 },
    analysis: `你是那种会在Kai跳舞的时候忘记呼吸的人。不是因为技术，是因为你们都相信：美，在它发生的那一刻就已经完整了，不需要被解释，不需要留存。你活在感受里，但你的感受有宇宙的尺度。你相信命运，但你比任何人都先出发——这件事上，你比Suho更像Kai，比Kai更像一个漫游者。《Power》是你的能量补给，那首歌告诉你：宇宙的力量可以很轻盈。`
  },
  AD: {
    code: 'AD',
    name: 'The Eternal Guardian',
    nameCn: '永恒守望者',
    tagline: '你把相信当作一种守护，哪怕对方不知道你在。',
    song: '《Universe》',
    radar: { Faith: 92, Grit: 55, Presence: 30, Devotion: 88, Connection: 75, Introspection: 60 },
    analysis: `你是Suho式的人。这个世界上有一种人，他们选择了守护，然后就再没有动摇过——不是因为他们没有过自己的软弱，而是因为守护这件事本身，就是他们的力量来源。你知道Suho在最难的那几年依然是那个站在最前面的人。你也是。你把相信变成了一种无声的护盾，哪怕对方不知道你在。《Universe》说的就是这种爱：跨越所有的距离，依然在。`
  },
  BA: {
    code: 'BA',
    name: 'The Faithful Rebel',
    nameCn: '信仰叛徒',
    tagline: '你用愤怒保护过自己，但信仰从未真正离开。',
    song: '《Monster》',
    radar: { Faith: 78, Grit: 90, Presence: 45, Devotion: 60, Connection: 72, Introspection: 65 },
    analysis: `你身上住着《Monster》里的那种张力——你有愤怒，但你的愤怒从来不是为了破坏，是为了保护某种你不肯放弃的东西。Chanyeol写歌的时候有这种气质，那些深夜录音室里的东西，凶悍里有执念，执念里有爱。你用叛逆的方式表达忠诚，用愤怒的方式护住信仰。别人以为你不在乎，其实你是最在乎的那个。`
  },
  BB: {
    code: 'BB',
    name: 'The Unbroken',
    nameCn: '未曾断裂者',
    tagline: '他们以为你会垮，但你只是在重新站稳。',
    song: '《Call Me Baby》',
    radar: { Faith: 50, Grit: 98, Presence: 40, Devotion: 70, Connection: 65, Introspection: 75 },
    analysis: `2015年，九个人重新站上舞台，用《Call Me Baby》告诉全世界：我们还在。那是EXO史上最有力量的瞬间之一，不是因为它完美，而是因为它是真实的重建。你身上有那个时期EXO集体意志的影子——不是没有受过伤，而是受伤之后选择了重新站稳。你的韧性不声张，但任何想要压垮你的东西最终都会发现：你比它更能耗。`
  },
  BC: {
    code: 'BC',
    name: 'The Midnight Phoenix',
    nameCn: '午夜凤凰',
    tagline: '你用燃烧代替哀悼，用此刻消化所有的过去。',
    song: '《Love Shot》',
    radar: { Faith: 45, Grit: 85, Presence: 82, Devotion: 50, Connection: 68, Introspection: 55 },
    analysis: `你有Baekhyun式的东西：明明承受了很多，却能在台上把一切转化成火焰。《Love Shot》那种美学——凌厉、燃烧、不解释——是你处理伤痛的方式。你不哀悼，你燃烧。你把过去的重量全部压缩成此刻的爆发，然后让那个爆发比任何悲伤都更好看。午夜对你来说不是最低点，是你重新点燃的时刻。`
  },
  BD: {
    code: 'BD',
    name: 'The Patient Warrior',
    nameCn: '耐心的战士',
    tagline: '你扛过来了，然后继续等，这两件事对你来说从来没有矛盾。',
    song: '《For Life》',
    radar: { Faith: 55, Grit: 88, Presence: 35, Devotion: 85, Connection: 70, Introspection: 72 },
    analysis: `D.O.在那几年一直在，不声不响地在，把自己的重量藏得很深，然后继续撑着。你是那种人。你扛过来了，然后没有停下来，继续等——等他们回来，等事情变好，等时间给出答案。《For Life》是你的歌，那种承诺不需要见证者，不需要掌声，只需要你自己知道：我答应过的，我在。`
  },
  CA: {
    code: 'CA',
    name: 'The Starlight Dreamer',
    nameCn: '星光梦游者',
    tagline: '你活在当下，但你的当下闪着星光。',
    song: '《Ko Ko Bop》',
    radar: { Faith: 75, Grit: 38, Presence: 90, Devotion: 48, Connection: 80, Introspection: 42 },
    analysis: `你是Kai的镜像粉丝——他跳舞的时候活在每一帧里，你追星的时候也是。你是那种能从《Ko Ko Bop》里读出整个夏天哲学的人，那首歌告诉你：此刻的感受就是全部，不需要理由，不需要解释。你活在当下，但你的当下从来不廉价，你的当下里住着整个宇宙的星光。你是EXO-L里最自由的那种人。`
  },
  CB: {
    code: 'CB',
    name: 'The Burning Requiem',
    nameCn: '燃烧的安魂曲',
    tagline: '你用尽全力活在此刻，因为你知道此刻来之不易。',
    song: '《Obsession》',
    radar: { Faith: 42, Grit: 75, Presence: 88, Devotion: 55, Connection: 65, Introspection: 60 },
    analysis: `Chen的声音有一种东西：他在唱的时候，你能感觉到那不只是歌，是他把某种来不及说的话压缩进了音符里。你也是这样的人，你用尽全力活在此刻，是因为你比别人更清楚"此刻来之不易"是什么意思。你见过失去，所以你燃烧的方式带着某种哀悼——不是为过去哭泣，而是把过去变成燃料。《Obsession》里那种偏执和炙热，你全懂。`
  },
  CC: {
    code: 'CC',
    name: 'The Pure Sensation',
    nameCn: '纯粹感受体',
    tagline: '你是感受本身，不需要任何理由。',
    song: '《Artificial Love》',
    radar: { Faith: 35, Grit: 42, Presence: 98, Devotion: 40, Connection: 78, Introspection: 38 },
    analysis: `你是Kai跳《Artificial Love》时台下最沉默的那个观众。不是因为你冷漠，是因为你被完全占据了。你不需要分析什么，不需要解读什么，美发生的那一刻你就知道了。你是EXO-L里最接近"纯粹审美动物"的人——你爱EXO的方式里没有太多道理，只有感受，但那种感受比任何道理都更真实、更不可撼动。`
  },
  CD: {
    code: 'CD',
    name: 'The Quiet Flame',
    nameCn: '安静的火',
    tagline: '你很安静，但只要你在，那里就是暖的。',
    song: '《Sing for You》',
    radar: { Faith: 48, Grit: 52, Presence: 85, Devotion: 80, Connection: 70, Introspection: 55 },
    analysis: `D.O.的OST有一种特质：它不强迫你感动，它只是在那里，然后你的某个地方悄悄软化了。你也是这样的人。你不声张，不表演，但只要你在场，那个房间的温度就不一样。《Sing for You》是冬天写给不在场的人的歌，你是那种会在深夜把这首歌发给对方、然后什么都不说的人。安静是你的语言，但那种安静里有整片星空的重量。`
  },
  DA: {
    code: 'DA',
    name: 'The Lighthouse Keeper',
    nameCn: '灯塔守护人',
    tagline: '你不动，但你的光能照到很远的地方。',
    song: "《Don't Fight the Feeling》",
    radar: { Faith: 82, Grit: 58, Presence: 38, Devotion: 95, Connection: 75, Introspection: 65 },
    analysis: `Suho有一句话说过：不管发生什么，EXO就是EXO。那不是口号，那是他用整个队长生涯兑现过的承诺。你身上有这种质地——你不动，但你的光能照到很远的地方。全员入伍那六年，你没有走，你把那段等待活成了一种日常，像灯塔一样亮着，不问什么时候有船回来。《Don't Fight the Feeling》说的就是这种爱：不挣扎，不放弃，只是在。`
  },
  DB: {
    code: 'DB',
    name: 'The Faithful Exile',
    nameCn: '忠诚的流亡者',
    tagline: '你把所有的失去都活成了更深的留下来。',
    song: '《El Dorado》',
    radar: { Faith: 62, Grit: 80, Presence: 35, Devotion: 92, Connection: 68, Introspection: 78 },
    analysis: `Lay在那几年是真正意义上的"流亡者"——两边跑，两边都给，什么都放不下，什么都没拿全。但他没有离开，那是一种比"留下来"更难的选择。你身上有这种东西：你失去过，你被风波折磨过，但那些失去最终都活成了更深的根。《El Dorado》说的是寻找应许之地的人，你知道那个地方不一定存在，但你还是在找，因为寻找本身就是你的意义。`
  },
  DC: {
    code: 'DC',
    name: 'The Gentle Devotee',
    nameCn: '温柔的虔信者',
    tagline: '你等待的方式很柔软，但那个柔软里有整片冬天的重量。',
    song: '《Miracles in December》',
    radar: { Faith: 52, Grit: 48, Presence: 75, Devotion: 90, Connection: 82, Introspection: 58 },
    analysis: `Xiumin是那种你很容易忽略、但一旦注意到就再也忽视不了的人——安静，扎实，有一种岁月沉淀出来的温柔。你也是。你等待的方式不激烈，甚至有点轻，但那个轻里面有整片冬天的重量。《Miracles in December》是那种会在某个下午突然让你泪崩的歌，不是因为它悲伤，是因为它准确。你是准确的人——你的感受，你的等待，你的爱，全都准确。`
  },
  DD: {
    code: 'DD',
    name: 'The Infinite Wait',
    nameCn: '无限等待者',
    tagline: '你把等待活成了一种哲学，时间对你来说从来不是敌人。',
    song: '《Moonlight》',
    radar: { Faith: 65, Grit: 62, Presence: 32, Devotion: 98, Connection: 72, Introspection: 85 },
    analysis: `从2019年Xiumin入伍，到2025年世勋退伍，六年。你等过来了。不是咬牙，是真的把等待变成了一种生活方式，变成了一种哲学。这件事上，你比任何人都更接近EXO这个团体本身的精神——他们也在等，等全员，等回来，等下一个章节。《Moonlight》是你的镜子，月光不移动，但它永远在，照着每一个还在等的人。你是那道光。`
  }
};

