/**
 * Class
 */
class Class_type {
    // todo: class 技能
    static TYPES = {
        /**
         * 坦克
         */
        TANK: {
            ID: 1,
            /**
             * 名稱
             */
            name: "坦克",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
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
                "health_point": 50,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 20
        },
        /**
         * 打手
         */
        ATTACKER: {
            ID: 2,
            /**
             * 名稱
             */
            name: "打手",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
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
                "health_point": 0,
                "attack": 6,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 10
        },
        /**
         * 輔助
         */
        SUPPORTER: {
            ID: 3,
            /**
             * 名稱
             */
            name: "輔助",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
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
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 3,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 15
        },
        /**
         * T.S.
         */
        TACTICAL: {
            ID: 4,
            /**
             * 名稱
             */
            name: "T.S.",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
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
                "health_point": 0,
                "attack": 0,
                "defense": 6,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 10
        },
        /**
         * 治療師
         */
        HEALER: {
            ID: 5,
            /**
             * 名稱
             */
            name: "治療師",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
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
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 3,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 20,
        }
    }

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.keys(Class_type.TYPES).forEach((class_name) => {
            const class_type = Class_type.TYPES[class_name];
            data.push({
                "名稱": class_type.name,
                "探索屬性": new Exploration_attributes().generate_table_data(class_type.exploration_attributes),
                "戰鬥屬性": new Battle_attributes().generate_table_data(class_type.battle_attributes),
                "獎勵點": class_type.bonus_point
            });
        });
        return data;
    }
}