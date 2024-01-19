/**
 * 攻擊類型
 */
class Attack_type {
    static TYPES = {
        /**
         * 爆炸
         */
        EXPLOSION: {
            ID: 1,
            /**
             * 名稱
             */
            name: "爆炸"
        },
        /**
         * 貫穿
         */
        PENETRATION: {
            ID: 2,
            /**
             * 名稱
             */
            name: "貫穿"
        },
        /**
         * 神秘
         */
        MYSTIC: {
            ID: 3,
            /**
             * 名稱
             */
            name: "神秘"
        }
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    create_options() {

        let select_element = document.createElement('select');
        select_element.id = 'attack_type_select';

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.keys(Attack_type.TYPES).forEach((type_name) => {
            const attack_type = Attack_type.TYPES[type_name];
            const new_option = document.createElement('option')
            new_option.textContent = attack_type.name;
            new_option.dataset.id = type_name;
            select_element.appendChild(new_option);
        });
        return select_element;
    }
}