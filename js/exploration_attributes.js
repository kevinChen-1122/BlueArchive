/**
 * 探索屬性
 */
class Exploration_attributes {
    static ATTRIBUTE_NAME = new Map([
        ["strength","體能"],
        ["size","體型"],
        ["intuition","靈感"],
        ["willpower","意志"],
        ["mystery","神秘"],
        ["luck","幸運"],
    ]);
    /**
     * @param {object[{
     *     strength:number,
     *     size:number,
     *     intuition:number,
     *     willpower:number,
     *     mystery:number,
     *     luck:number
     * }]} data
     */
    constructor(data = {}) {
        /**
         * 體能
         * @type {number}
         */
        this.strength = data.strength ?? 0;
        /**
         * 體型
         * @type {number}
         */
        this.size = data.size ?? 0;
        /**
         * 靈感
         * @type {number}
         */
        this.intuition = data.intuition ?? 0;
        /**
         * 意志
         * @type {number}
         */
        this.willpower = data.willpower ?? 0;
        /**
         * 神秘
         * @type {number}
         */
        this.mystery = data.mystery ?? 0;
        /**
         * 幸運
         * @type {number}
         */
        this.luck = data.luck ?? 0;
    }

    /**
     * 轉換表格格式
     * @param data
     * @returns {string}
     */
    generate_table_data(data){
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
        let attribute = Object.entries(data)
            .filter(([key, value]) => Exploration_attributes.ATTRIBUTE_NAME.has(key) && value !== 0)
            .map(([key, value]) => {
                let sign = value > 0 ? '+' : '-';
                return `<li>${Exploration_attributes.ATTRIBUTE_NAME.get(key)} ${sign} ${Math.abs(value)}</li>`;
            })
            .join('');
        return `<ul>${attribute}</ul>`;
    }
}