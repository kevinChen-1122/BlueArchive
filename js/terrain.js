/**
 * 地形戰鬥力
 */
class Terrain {
    /**
     * 地形
     * @type {{CITY: {name: string, ID: number}, INDOORS: {name: string, ID: number}, DESERT: {name: string, ID: number}}}
     */
    static TERRAIN_TYPE = {
        /**
         * 市區戰
         */
        CITY: {
            ID: 1,
            /**
             * 名稱
             */
            name: "市區戰"
        },
        /**
         * 野外戰
         */
        DESERT: {
            ID: 2,
            /**
             * 名稱
             */
            name: "野外戰"
        },
        /**
         * 室內戰
         */
        INDOORS: {
            ID: 3,
            /**
             * 名稱
             */
            name: "室內戰"
        }
    };
    /**
     * 地形戰鬥力
     * @type {{A: {damage: number, cost: number}, B: {damage: number, cost: number}, S: {damage: number, cost: number}, C: {damage: number, cost: number}, D: {damage: number, cost: number}}}
     */
    static AFFINITY = {
        S: {
            /**
             * 傷害加成
             */
            damage: 10,
            /**
             * cost
             */
            cost: 5
        },
        A: {
            /**
             * 傷害加成
             */
            damage: 5,
            /**
             * cost
             */
            cost: 4
        },
        B: {
            /**
             * 傷害加成
             */
            damage: 0,
            /**
             * cost
             */
            cost: 3
        },
        C: {
            /**
             * 傷害加成
             */
            damage: -5,
            /**
             * cost
             */
            cost: 2
        },
        D: {
            /**
             * 傷害加成
             */
            damage: -10,
            /**
             * cost
             */
            cost: 1
        }
    }
}