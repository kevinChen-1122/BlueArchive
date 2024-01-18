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

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.keys(Terrain.AFFINITY).forEach((affinity_name) => {
            const affinity_type = Terrain.AFFINITY[affinity_name];
            data.push({
                "名稱": affinity_name,
                "傷害加成": affinity_type.damage,
                "獎勵點": affinity_type.cost
            });
        });
        return data;
    }
}