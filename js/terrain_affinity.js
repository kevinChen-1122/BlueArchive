/**
 * 地形戰鬥力
 */
class Terrain_affinity {
    /**
     *
     * @param {number} damage 傷害加成
     * @param {number} cost cost
     */
    constructor(damage = 0, cost = 0) {
        /**
         * 傷害加成
         * @type {number}
         */
        this.damage = damage;
        /**
         * cost
         * @type {number}
         */
        this.cost = cost;
    }

    static LIST = []

    static SELECT_ELEMENT

    /**
     * 初始化
     */
    static initialize() {
        Object.values(terrain_affinity_config).forEach((item) => {
            this[item.key] = new this(item.data.damage,item.data.cost);
            this.LIST.push(item.key);
        });
    }

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.values(Terrain_affinity.LIST).forEach((affinity_name) => {
            if (Terrain_affinity[affinity_name] ?? null) {
                data.push({
                    "名稱": affinity_name,
                    "傷害加成": Terrain_affinity[affinity_name].damage,
                    "獎勵點": Terrain_affinity[affinity_name].cost
                });
            }
        });
        return data;
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    create_options(terrain_type) {

        let select_element = document.createElement('select');
        select_element.id = `terrain_${terrain_type}_select`;

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.values(Terrain_affinity.LIST).forEach((name) => {
            const new_option = document.createElement('option')
            if (Terrain_affinity[name] ?? null) {
                new_option.textContent = `${name} (cost: ${Terrain_affinity[name].cost})`;
                new_option.dataset.id = name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}

const terrain_affinity_config = [
    {
        key:"S",
        data:{
            damage:10,
            cost:5
        }
    },
    {
        key:"A",
        data:{
            damage:5,
            cost:4
        }
    },
    {
        key:"B",
        data:{
            damage:0,
            cost:3
        }
    },
    {
        key:"C",
        data:{
            damage:-5,
            cost:2
        }
    },
    {
        key:"D",
        data:{
            damage:-10,
            cost:1
        }
    }
];

Terrain_affinity.initialize();