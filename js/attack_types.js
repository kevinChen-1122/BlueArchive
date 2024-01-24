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
        this._name = name;
    }
    static LIST = [
        "EXPLOSION",
        "PENETRATION",
        "MYSTIC"
    ];
    static EXPLOSION = new Attack_types('爆炸');
    static PENETRATION = new Attack_types('貫穿');
    static MYSTIC = new Attack_types('神秘');

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

        Object.values(Attack_types.LIST).forEach((type_name) => {
            if (Attack_types[type_name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = Attack_types[type_name]._name;
                new_option.dataset.id = type_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}