/**
 * 裝備
 */
class Equipment {
    /**
     * 區塊
     * @type {{A: string, B: string, C: string}}
     */
    static SLOTS_TYPE = {
        A: "A",
        B: "B",
        C: "C",
    }
    /**
     * 類型
     * @type {{BADGE: {slots_type: string, exploration_attributes: Exploration_attributes, effect: [string], name: string, ID: number, battle_attributes: Battle_attributes}, NECKLACE: {slots_type: string, exploration_attributes: Exploration_attributes, effect: string[], name: string, ID: number, battle_attributes: Battle_attributes}, HAIRPIN: {slots_type: string, exploration_attributes: Exploration_attributes, effect: [string], name: string, ID: number, battle_attributes: Battle_attributes}, GLOVES: {slots_type: string, exploration_attributes: Exploration_attributes, effect: [string], name: string, ID: number, battle_attributes: Battle_attributes}, CHARM: {slots_type: string, exploration_attributes: Exploration_attributes, effect: string[], name: string, ID: number, battle_attributes: Battle_attributes}, WATCH: {slots_type: string, exploration_attributes: Exploration_attributes, effect: string[], name: string, ID: number, battle_attributes: Battle_attributes}, BAG: {slots_type: string, exploration_attributes: Exploration_attributes, effect: [], name: string, ID: number, battle_attributes: Battle_attributes}, HAT: {slots_type: string, exploration_attributes: Exploration_attributes, effect: [string], name: string, ID: number, battle_attributes: Battle_attributes}, SHOE: {slots_type: string, exploration_attributes: Exploration_attributes, effect: [], name: string, ID: number, battle_attributes: Battle_attributes}}}
     */
    static types = {
        /**
         * 帽子
         */
        HAT: {
            ID: 1,
            /**
             * 名稱
             */
            name: "帽子",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.A,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 2,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 2,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "戰鬥中射擊傷害+2"
            ]
        },
        /**
         * 手套
         */
        GLOVES: {
            ID: 2,
            /**
             * 名稱
             */
            name: "手套",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.A,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 1,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 1,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "增加一個爆擊判定值"
            ]
        },
        /**
         * 鞋子
         */
        SHOE: {
            ID: 3,
            /**
             * 名稱
             */
            name: "鞋子",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.A,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 1,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 30,
                "attack": 1,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
            ]
        },
        /**
         * 髮夾
         */
        HAIRPIN: {
            ID: 4,
            /**
             * 名稱
             */
            name: "髮夾",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.B,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 1,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 60,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "群控效果無效"
            ]
        },
        /**
         * 勳章
         */
        BADGE: {
            ID: 5,
            /**
             * 名稱
             */
            name: "勳章",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.B,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 2,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 100,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "體力被回復時，再回復30"
            ]
        },
        /**
         * 背包
         */
        BAG: {
            ID: 6,
            /**
             * 名稱
             */
            name: "背包",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.B,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 2,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 80,
                "attack": 0,
                "defense": 3,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
            ]
        },
        /**
         * 手錶
         */
        WATCH: {
            ID: 7,
            /**
             * 名稱
             */
            name: "手錶",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.C,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 1,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "爆擊時傷害+10",
                "增加一個爆擊判定值"
            ]
        },
        /**
         * 符咒
         */
        CHARM: {
            ID: 8,
            /**
             * 名稱
             */
            name: "符咒",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.C,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 1
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "爆擊無效次數+1",
                "被爆擊時基本傷害減半"
            ]
        },
        /**
         * 項鍊
         */
        NECKLACE: {
            ID: 9,
            /**
             * 名稱
             */
            name: "項鍊",
            /**
             * 區塊
             */
            slots_type: Equipment.SLOTS_TYPE.C,
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 1,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 5,
                "dexterity": 1,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "爆擊無效次數+1",
                "被爆擊時基本傷害減半"
            ]
        },
    }
}