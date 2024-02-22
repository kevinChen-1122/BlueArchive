/**
 * 裝備
 */
class Equipment {
    /**
     *
     * @param {string} name 名稱
     * @param {string} slots_type 裝備區塊
     * @param {Exploration_attributes|{}} exploration_attributes 探索屬性
     * @param {Battle_attributes|{}} battle_attributes 戰鬥屬性
     * @param {[]} effect 效果
     */
    constructor(name = '', slots_type = '', exploration_attributes = {}, battle_attributes = {}, effect = []) {
        /**
         * 名稱
         * @type {string}
         */
        this.name = name;
        /**
         * 裝備區塊
         * @type {string}
         */
        this.slots_type = slots_type;
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
        /**
         * 效果
         * @type {[]}
         */
        this.effect = effect;
    }

    /**
     * 區塊
     * @type {{A: string, B: string, C: string}}
     */
    static SLOTS_TYPE = {
        A: "A",
        B: "B",
        C: "C",
    }

    static LIST = [];

    static SELECT_ELEMENT_SLOTS_TYPE_A

    static SELECT_ELEMENT_SLOTS_TYPE_B

    static SELECT_ELEMENT_SLOTS_TYPE_C

    /**
     * 初始化
     */
    static initialize() {
        Object.values(equipment_config).forEach((item) => {
            this[item.key] = new this(
                item.data.name,
                item.data.slots_type,
                item.data.exploration_attributes,
                item.data.battle_attributes,
                item.data.effect
            );
            this.LIST.push(item.key);
        });
        this.SELECT_ELEMENT_SLOTS_TYPE_A = this.create_options(this.SLOTS_TYPE.A);
        this.SELECT_ELEMENT_SLOTS_TYPE_B = this.create_options(this.SLOTS_TYPE.B);
        this.SELECT_ELEMENT_SLOTS_TYPE_C = this.create_options(this.SLOTS_TYPE.C);
    }

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.values(Equipment.LIST).forEach((equipment_name) => {
            if (Equipment[equipment_name] ?? null) {
                data.push({
                    "名稱": Equipment[equipment_name].name,
                    "區塊": Equipment[equipment_name].slots_type,
                    "探索屬性": new Exploration_attributes().generate_table_data(Equipment[equipment_name].exploration_attributes),
                    "戰鬥屬性": new Battle_attributes().generate_table_data(Equipment[equipment_name].battle_attributes),
                    "效果": Object.values(Equipment[equipment_name].effect).map(effect => `<li>${effect}</li>`).join(''),
                });
            }
        });
        return data;
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    static create_options(slots_type) {

        let select_element = document.createElement('select');
        select_element.id = `equipment_${slots_type}_slots_select`;

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        const equipment_by_slots = Object.values(Equipment.LIST).filter(item => Equipment[item].slots_type === slots_type);
        Object.values(equipment_by_slots).forEach((name) => {
            if (Equipment[name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = Equipment[name].name;
                new_option.dataset.id = name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}

const equipment_config = [
    {
        key:"HAT",
        data:{
            name:"帽子",
            slots_type:Equipment.SLOTS_TYPE.A,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:2,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:2,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
                "戰鬥中射擊傷害+2"
            ]
        }
    },
    {
        key:"GLOVES",
        data:{
            name:"手套",
            slots_type:Equipment.SLOTS_TYPE.A,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:1,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:1,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
                "增加一個爆擊判定值"
            ]
        }
    },
    {
        key:"SHOE",
        data:{
            name:"鞋子",
            slots_type:Equipment.SLOTS_TYPE.A,
            exploration_attributes:{
                strength:0,
                size:1,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:30,
                attack:1,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
            ]
        }
    },
    {
        key:"HAIRPIN",
        data:{
            name:"髮夾",
            slots_type:Equipment.SLOTS_TYPE.A,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:1,
                luck:0
            },
            battle_attributes:{
                health_point:60,
                attack:0,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
                "群控效果無效"
            ]
        }
    },
    {
        key:"BADGE",
        data:{
            name:"勳章",
            slots_type:Equipment.SLOTS_TYPE.B,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:2,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:100,
                attack:0,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
                "體力被回復時，再回復30"
            ]
        }
    },
    {
        key:"BAG",
        data:{
            name:"背包",
            slots_type:Equipment.SLOTS_TYPE.B,
            exploration_attributes:{
                strength:2,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:80,
                attack:0,
                defense:3,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
            ]
        }
    },
    {
        key:"WATCH",
        data:{
            name:"手錶",
            slots_type:Equipment.SLOTS_TYPE.C,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:1,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:0,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
                "爆擊時傷害+10",
                "增加一個爆擊判定值"
            ]
        }
    },
    {
        key:"CHARM",
        data:{
            name:"符咒",
            slots_type:Equipment.SLOTS_TYPE.C,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:1
            },
            battle_attributes:{
                health_point:0,
                attack:0,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            },
            effect:[
            ]
        }
    },
    {
        key:"NECKLACE",
        data:{
            name:"項鍊",
            slots_type:Equipment.SLOTS_TYPE.C,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:1,
                luck:0
            },
            battle_attributes:{
                health_point:0,
                attack:0,
                defense:0,
                heal:5,
                dexterity:1,
                accurate:0,
                agility:0
            },
            effect:[
                "爆擊無效次數+1",
                "被爆擊時基本傷害減半"
            ]
        }
    }
];

Equipment.initialize();