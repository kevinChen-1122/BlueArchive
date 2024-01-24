/**
 * 防禦類型
 */
class Defense_types {
    /**
     *
     * @param {string} name 名稱
     */
    constructor(name = '') {
        /**
         * 名稱
         * @type {string}
         */
        this._name = name;
    }
    static LIST = [
        "LIGHT_ARMOR",
        "HEAVY_ARMOR",
        "SPECIAL_ARMOR"
    ];
    static LIGHT_ARMOR = new Defense_types('輕裝甲');
    static HEAVY_ARMOR = new Defense_types('重裝甲');
    static SPECIAL_ARMOR = new Defense_types('特殊裝甲');

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

        Object.values(Defense_types.LIST).forEach((type_name) => {
            if (Defense_types[type_name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = Defense_types[type_name]._name;
                new_option.dataset.id = type_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}