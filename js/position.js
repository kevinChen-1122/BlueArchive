/**
 * 位置
 */
class Position {
    constructor(name = '', bonus_point = 0, movement_point = 0, exploration_attributes = {}, battle_attributes = {}) {
        this._name = name;
        this._bonus_point = bonus_point;
        this._movement_point = movement_point;
        this._exploration_attributes = new Exploration_attributes(exploration_attributes);
        this._battle_attributes = new Battle_attributes(battle_attributes);
    }
    static config = {
        front:{
            name:"FRONT",
            bonus_point:15,
            movement_point:3,
            exploration_attributes:{
                strength:0,
                size:0,
                intuition:0,
                willpower:0,
                mystery:0,
                luck:0
            },
            battle_attributes:{
                health_point:30,
                attack:0,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            }
        },
        middle:{
            name:"MIDDLE",
            bonus_point:15,
            movement_point:2,
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
                attack:3,
                defense:0,
                heal:0,
                dexterity:0,
                accurate:0,
                agility:0
            }
        },
        back:{
            name:"BACK",
            bonus_point:20,
            movement_point:1,
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
                dexterity:1,
                accurate:0,
                agility:0
            }
        }
    };
    static LIST = [
        "FRONT",
        "MIDDLE",
        "BACK"
    ];
    static FRONT = new Position(
        Position.config.front.name,
        Position.config.front.bonus_point,
        Position.config.front.movement_point,
        Position.config.front.exploration_attributes,
        Position.config.front.battle_attributes
    );
    static MIDDLE = new Position(
        Position.config.middle.name,
        Position.config.middle.bonus_point,
        Position.config.middle.movement_point,
        Position.config.middle.exploration_attributes,
        Position.config.middle.battle_attributes
    )
    static BACK = new Position(
        Position.config.back.name,
        Position.config.back.bonus_point,
        Position.config.back.movement_point,
        Position.config.back.exploration_attributes,
        Position.config.back.battle_attributes
    );

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.values(Position.LIST).forEach((position_name) => {
            const position = Position[position_name];
            data.push({
                "名稱": position._name,
                "探索屬性": new Exploration_attributes().generate_table_data(position._exploration_attributes),
                "戰鬥屬性": new Battle_attributes().generate_table_data(position._battle_attributes),
                "移動力": position._movement_point,
                "獎勵點": position._bonus_point
            });
        });
        return data;
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    create_options() {

        let select_element = document.createElement('select');
        select_element.id = 'position_select';

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.values(Position.LIST).forEach((type_name) => {
            if (Position[type_name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = Position[type_name]._name;
                new_option.dataset.id = type_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}