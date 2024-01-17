/**
 * 戰鬥屬性
 */
class Battle_attributes {
    static ATTRIBUTE_NAME = new Map([
        ["health_point", "體力"],
        ["attack", "攻擊"],
        ["defense", "防禦"],
        ["heal", "治癒"],
        ["dexterity", "敏捷"],
        ["accurate", "命中"],
        ["agility", "迴避"]
    ]);

    /**
     * @param {object[{
     *     health_point:number,
     *     attack:number,
     *     defense:number,
     *     heal:number,
     *     dexterity:number,
     *     accurate:number,
     *     agility:number
     * }]} data
     */
    constructor(data = {}) {
        /**
         * 體力
         * @type {number}
         */
        this.health_point = data.health_point ?? 0;
        /**
         * 攻擊
         * @type {number}
         */
        this.attack = data.attack ?? 0;
        /**
         * 防禦
         * @type {number}
         */
        this.defense = data.defense ?? 0;
        /**
         * 治癒
         * @type {number}
         */
        this.heal = data.heal ?? 0;
        /**
         * 敏捷
         * @type {number}
         */
        this.dexterity = data.dexterity ?? 0;
        /**
         * 命中
         * @type {number}
         */
        this.accurate = data.accurate ?? 0;
        /**
         * 迴避
         * @type {number}
         */
        this.agility = data.agility ?? 0;
    }

    /**
     * 轉換表格格式
     * @param data
     * @returns {string}
     */
    generate_table_data(data) {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
        let attribute = Object.entries(data)
            .filter(([key, value]) => Battle_attributes.ATTRIBUTE_NAME.has(key) && value !== 0)
            .map(([key, value]) => {
                let sign = value > 0 ? '+' : '-';
                return `<li>${Battle_attributes.ATTRIBUTE_NAME.get(key)} ${sign} ${Math.abs(value)}</li>`;
            })
            .join('');
        return `<ul>${attribute}</ul>`;
    }
}