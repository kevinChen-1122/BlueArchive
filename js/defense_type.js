/**
 * 防禦類型
 */
class Defense_type {
    static TYPES = {
        /**
         * 輕裝甲
         */
        LIGHT_ARMOR: {
            ID: 1,
            /**
             * 名稱
             */
            name: "輕裝甲"
        },
        /**
         * 重裝甲
         */
        HEAVY_ARMOR: {
            ID: 2,
            /**
             * 名稱
             */
            name: "重裝甲"
        },
        /**
         * 特殊裝甲
         */
        SPECIAL_ARMOR: {
            ID: 3,
            /**
             * 名稱
             */
            name: "特殊裝甲"
        }
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    create_options() {

        let select_element = document.createElement('select');
        select_element.id = 'defense_type_select';

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.keys(Defense_type.TYPES).forEach((type_name) => {
            const defense_type = Defense_type.TYPES[type_name];
            const new_option = document.createElement('option')
            new_option.textContent = defense_type.name;
            new_option.dataset.id = type_name;
            select_element.appendChild(new_option);
        });
        return select_element;
    }
}