class Character {
    constructor() {
        /**
         * 姓名
         * @type {string}
         * @private
         */
        this._name = '';
        /**
         * 性別
         * @type {string}
         * @private
         */
        this._gender = '';
        /**
         * 身高
         * @type {number}
         * @private
         */
        this._height = 0;
        /**
         * 年齡
         * @type {string}
         * @private
         */
        this._age = '';
        /**
         * 神秘.種族
         * @type {string}
         * @private
         */
        this._ethnicity = '';
        /**
         * 學校
         * @type {string}
         * @private
         */
        this._school = '';
        /**
         * 學年
         * @type {string}
         * @private
         */
        this._school_year = '';
        /**
         * 社團.委員會
         * @type {string}
         * @private
         */
        this._club = '';
        /**
         * 學生情報
         * @type {string}
         * @private
         */
        this._info = '';
        /**
         * 資訊欄
         * @type {string}
         * @private
         */
        this._log = '';
        /**
         * 武器名
         * @type {string}
         * @private
         */
        this._weapon_name = '';
        /**
         * 槍種
         * @type {null}
         * @private
         */
        this._firearm = null;

    }

    set name(newName) {
        if (newName !== this._name) {
            this._name = newName;
            this.updateNameInHTML();
        }
    }

    get name() {
        return this._name;
    }

    updateNameInHTML() {
        const nameElement = document.getElementById('_name');
        if (nameElement) {
            nameElement.textContent = this._name;
        }
    }
}

// 创建 Character 实例
const character = new Character();

// 通过设置 _name 属性来触发更新
character.name = 'John Doe'; // 这会更新 id 为 '_name' 的 div 内容为 'John Doe'
