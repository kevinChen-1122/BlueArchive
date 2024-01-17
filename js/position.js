/**
 * 位置
 */
class Position {
    static types = {
        FRONT: {
            ID: 1,
            /**
             * 名稱
             */
            name: "FRONT",
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
                "health_point": 30,
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
            bonus_point: 15,
            /**
             * 移動力
             */
            movement_point: 3
        },
        MIDDLE: {
            ID: 2,
            /**
             * 名稱
             */
            name: "MIDDLE",
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
                "attack": 3,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 15,
            /**
             * 移動力
             */
            movement_point: 2
        },
        BACK: {
            ID: 3,
            /**
             * 名稱
             */
            name: "BACK",
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
                "dexterity": 1,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 20,
            /**
             * 移動力
             */
            movement_point: 1
        }
    }
}