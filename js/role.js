/**
 * 戰術作用
 */
class Role {
    /**
     *
     * @param {string} name 名稱
     * @param {number} bonus_point 獎勵點
     * @param {Exploration_attributes|{}} exploration_attributes 探索屬性
     * @param {Battle_attributes|{}} battle_attributes 戰鬥屬性
     */
    constructor(name = '', bonus_point = 0, exploration_attributes = {}, battle_attributes = {}) {
        /**
         * 名稱
         * @type {string}
         */
        this.name = name;
        /**
         * 獎勵點
         * @type {number}
         */
        this.bonus_point = bonus_point;
        /**
         * 探索屬性
         * @type {Exploration_attributes}
         */
        this.exploration_attributes = new Exploration_attributes(exploration_attributes);
        /**
         * 戰鬥屬性
         * @type {Battle_attributes}
         */
        this.battle_attributes = new Battle_attributes(battle_attributes);
    }
    static LIST = [];

    static SELECT_ELEMENT

    /**
     * 初始化
     */
    static initialize() {
        Object.values(role_config).forEach((item) => {
            this[item.key] = new this(
                item.data.name,
                item.data.bonus_point,
                item.data.exploration_attributes,
                item.data.battle_attributes
            );
            this.LIST.push(item.key);
        });
        this.SELECT_ELEMENT = this.create_options();
    }

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.values(Role.LIST).forEach((role_name) => {
            if (Role[role_name] ?? null) {
                data.push({
                    "名稱": Role[role_name].name,
                    "探索屬性": new Exploration_attributes().generate_table_data(Role[role_name].exploration_attributes),
                    "戰鬥屬性": new Battle_attributes().generate_table_data(Role[role_name].battle_attributes),
                    "獎勵點": Role[role_name].bonus_point
                });
            }
        });
        return data;
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    static create_options() {

        let select_element = document.createElement('select');
        select_element.id = 'role_select';

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.values(Role.LIST).forEach((role_name) => {
            if (Role[role_name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = Role[role_name].name;
                new_option.dataset.id = role_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}

const role_config = [
    {
        key:"STRIKER",
        data:{
            name:"STRIKER",
            bonus_point: 10,
            exploration_attributes:{
                strength: 0,
                size: 0,
                intuition: 0,
                willpower: 0,
                mystery: 0,
                luck: 0
            },
            battle_attributes:{
                health_point: 20,
                attack: 0,
                defense: 0,
                heal: 0,
                dexterity: 1,
                accurate: 0,
                agility: 0
            }
        }
    },
    {
        key:"SPECIAL",
        data:{
            name:"SPECIAL",
            bonus_point: 10,
            exploration_attributes:{
                strength: 0,
                size: 0,
                intuition: 0,
                willpower: 0,
                mystery: 0,
                luck: 0
            },
            battle_attributes:{
                health_point: 0,
                attack: 1,
                defense: 0,
                heal: 0,
                dexterity: 0,
                accurate: 1,
                agility: 0
            }
        }
    }
];

Role.initialize();