/**
 * 地形
 */
class Terrain {
    /**
     *
     * @param {string} name 名稱
     */
    constructor(name = '') {
        /**
         * 名稱
         * @type {string}
         */
        this.name = name;
    }

    /**
     * 初始化
     */
    static initialize() {
        Object.values(terrain_config).forEach((item) => {
            this[item.key] = new this(item.data.name);
        });
    }
}

const terrain_config = [
    {
        key:"CITY",
        data:{
            name:"市區戰"
        }
    },
    {
        key:"DESERT",
        data:{
            name:"野外戰"
        }
    },
    {
        key:"INDOORS",
        data:{
            name:"室內戰"
        }
    }
];

Terrain.initialize();