/**
 * 戰術作用
 */
class Role {
    /**
     *
     * @param {string} name 名稱
     * @param {number} bonus_point 獎勵點
     * @param {object} exploration_attributes 探索屬性
     * @param {object} battle_attributes 戰鬥屬性
     */
    constructor(name = '', bonus_point = 0, exploration_attributes = {}, battle_attributes = {}) {
        /**
         * 名稱
         * @type {string}
         * @private
         */
        this._name = name;
        /**
         * 獎勵點
         * @type {number}
         * @private
         */
        this._bonus_point = bonus_point;
        /**
         * 探索屬性
         * @type {Exploration_attributes}
         * @private
         */
        this._exploration_attributes = new Exploration_attributes(exploration_attributes);
        /**
         * 戰鬥屬性
         * @type {Battle_attributes}
         * @private
         */
        this._battle_attributes = new Battle_attributes(battle_attributes);
    }
    static LIST = [
        "STRIKER",
        "SPECIAL"
    ];
    static config = {
        striker:{
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
        },
        special:{
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
    };
    static STRIKER = new Role(
        Role.config.striker.name,
        Role.config.striker.bonus_point,
        Role.config.striker.exploration_attributes,
        Role.config.striker.battle_attributes
    );
    static SPECIAL = new Role(
        Role.config.special.name,
        Role.config.special.bonus_point,
        Role.config.special.exploration_attributes,
        Role.config.special.battle_attributes
    );

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.values(Role.LIST).forEach((role_name) => {
            if (Role[role_name] ?? null) {
                data.push({
                    "名稱": Role[role_name]._name,
                    "探索屬性": new Exploration_attributes().generate_table_data(Role[role_name]._exploration_attributes),
                    "戰鬥屬性": new Battle_attributes().generate_table_data(Role[role_name]._battle_attributes),
                    "獎勵點": Role[role_name]._bonus_point
                });
            }
        });
        return data;
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    create_options() {

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
                new_option.textContent = Role[role_name]._name;
                new_option.dataset.id = role_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}