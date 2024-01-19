/**
 * 位置
 */
class Position {
    static TYPES = {
        FRONT: {
            ID: 1,
            /**
             * 名稱
             */
            name: "FRONT",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 30,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 15,
            /**
             * 移動力
             */
            movement_point: 3
        },
        MIDDLE: {
            ID: 2,
            /**
             * 名稱
             */
            name: "MIDDLE",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 3,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 15,
            /**
             * 移動力
             */
            movement_point: 2
        },
        BACK: {
            ID: 3,
            /**
             * 名稱
             */
            name: "BACK",
            /**
             * 探索屬性
             */
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            /**
             * 戰鬥屬性
             */
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 1,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 獎勵點
             */
            bonus_point: 20,
            /**
             * 移動力
             */
            movement_point: 1
        }
    }

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.keys(Position.TYPES).forEach((position_name) => {
            const position = Position.TYPES[position_name];
            data.push({
                "名稱": position.name,
                "探索屬性": new Exploration_attributes().generate_table_data(position.exploration_attributes),
                "戰鬥屬性": new Battle_attributes().generate_table_data(position.battle_attributes),
                "移動力": position.movement_point,
                "獎勵點": position.bonus_point
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

        Object.keys(Position.TYPES).forEach((type_name) => {
            const position_type = Position.TYPES[type_name];
            const new_option = document.createElement('option')
            new_option.textContent = position_type.name;
            new_option.dataset.id = type_name;
            select_element.appendChild(new_option);
        });
        return select_element;
    }
}