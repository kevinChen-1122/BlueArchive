/**
 * Class
 */
class Class_types {
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
        Object.values(class_types_config).forEach((item) => {
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
        Object.values(Class_types.LIST).forEach((class_name) => {
            if (Class_types[class_name] ?? null) {
                data.push({
                    "名稱": Class_types[class_name].name,
                    "探索屬性": new Exploration_attributes().generate_table_data(Class_types[class_name].exploration_attributes),
                    "戰鬥屬性": new Battle_attributes().generate_table_data(Class_types[class_name].battle_attributes),
                    "獎勵點": Class_types[class_name].bonus_point
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
        select_element.id = 'class_type_select';

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.values(Class_types.LIST).forEach((type_name) => {
            if (Class_types[type_name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = Class_types[type_name].name;
                new_option.dataset.id = type_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}

const class_types_config = [
    {
        key:"TANK",
        data:{
            name:"坦克",
            bonus_point:20,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:50,
                attack:0,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            }
        },
    },
    {
        key:"ATTACKER",
        data:{
            name:"打手",
            bonus_point:10,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:6,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            }
        },
    },
    {
        key:"SUPPORTER",
        data:{
            name:"輔助",
            bonus_point:15,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:0,
                defense:0,
                heal:0,
                dexterity:3,
                accurate:0,
                agility:0
            }
        },
    },
    {
        key:"TACTICAL",
        data:{
            name:"T.S.",
            bonus_point:10,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:0,
                defense:6,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            }
        },
    },
    {
        key:"HEALER",
        data:{
            name:"治療師",
            bonus_point:20,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:0,
                defense:0,
                heal:3,
                dexterity:0,
                accurate:0,
                agility:0
            }
        },
    }
];

Class_types.initialize();