/**
 * 戰術作用
 */
class Role {
    static TYPES = {
        STRIKER: {
            ID: 1,
            /**
             * 名稱
             */
            name: "STRIKER",
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
                "health_point": 20,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 1,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 10
        },
        SPECIAL: {
            ID: 2,
            /**
             * 名稱
             */
            name: "SPECIAL",
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
                "attack": 1,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 1,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 10
        }
    };

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.keys(Role.TYPES).forEach((role_name) => {
            const role = Role.TYPES[role_name];
            data.push({
                "名稱": role.name,
                "探索屬性": new Exploration_attributes().generate_table_data(role.exploration_attributes),
                "戰鬥屬性": new Battle_attributes().generate_table_data(role.battle_attributes),
                "獎勵點": role.bonus_point
            });
        });
        return data;
    }
}