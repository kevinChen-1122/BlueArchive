/**
 * 攻擊類型
 */
class Attack_types {
    /**
     *
     * @param {string} name 名稱
     */
    constructor(name = '') {
        /**
         * 名稱
         * @type {string}
         */
        this.name = name;
    }

    static LIST = [];

    static SELECT_ELEMENT

    /**
     * 初始化
     */
    static initialize() {
        Object.values(attack_types_config).forEach((item) => {
            this[item.key] = new this(item.data.name);
            this.LIST.push(item.key);
        });
        this.SELECT_ELEMENT = this.create_options();
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    static create_options() {

        let select_element = document.createElement('select');
        select_element.id = 'attack_type_select';

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.values(Attack_types.LIST).forEach((type_name) => {
            if (Attack_types[type_name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = Attack_types[type_name].name;
                new_option.dataset.id = type_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}

const attack_types_config = [
    {
        key:"EXPLOSION",
        data:{
            name:"爆炸"
        }
    },
    {
        key:"PENETRATION",
        data:{
            name:"貫穿"
        }
    },
    {
        key:"MYSTIC",
        data:{
            name:"神秘"
        }
    }
];

Attack_types.initialize();