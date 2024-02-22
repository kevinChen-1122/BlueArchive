/**
 * 武器
 */
class Firearm {
    constructor(data = {}) {
        /**
         * 名稱
         * @type {string}
         */
        this.name = data.name ?? '';
        /**
         * 對象
         * @type {Firearm.TARGET_TYPE|0}
         */
        this.target = data.target ?? 0;
        /**
         * 最大射程
         * @type {number|0}
         */
        this.max_range = data.max_range ?? 0;
        /**
         * 最小射程
         * @type {number|0}
         */
        this.min_range = data.min_range ?? 0;
        /**
         * 彈藥數
         * @type {number|0}
         */
        this.capacity = data.capacity ?? 0;
        /**
         * 裝彈數
         * @type {number|0}
         */
        this.reload_ammo = data.reload_ammo ?? 0;
        /**
         * 裝彈回合數
         * @type {number|0}
         */
        this.reload_turn = data.reload_turn ?? 0;
        /**
         * 傷害
         * @type {{fixed_value: (number), dice: (number)}}
         */
        this.damage = {
            dice: data.dice ?? 0,
            fixed_value: data.fixed_value ?? 0
        };
        /**
         * 特性
         * @type {string[]|[]}
         */
        this.property = data.property ?? [];
    }
    /**
     * 目標類型
     * @type {{ONE: number, MANY: number}}
     */
    static TARGET_TYPE = {
        NONE: 0,
        /**
         * 單一
         */
        ONE:1,
        /**
         * 複數
         */
        MANY:2
    };

    static LIST = [];

    static SELECT_ELEMENT;

    /**
     * 初始化
     */
    static initialize() {
        Object.values(firearm_config).forEach((item) => {
            this[item.key] = [];
            Object.values(item.data).forEach((firearm)=>{
                this[item.key].push(new this (firearm));
            });
            this.LIST.push(item.key);
        });
        this.SELECT_ELEMENT = this.create_options();
    }

    /**
     * 轉換表格資料
     * @returns {*[]}
     */
    generate_table_data() {
        let data = [];
        Object.values(Firearm.LIST).forEach((firearm_name) => {
            if (Firearm[firearm_name] ?? null) {
                data.push({
                    "銃種": firearm_name,
                    "武器": Object.values(Firearm[firearm_name]).map(weapon => `<div>${weapon.name}</div>`).join(''),
                    "對象": Object.values(Firearm[firearm_name]).map(weapon => `<div>${weapon.target === Firearm.TARGET_TYPE.ONE ? "單一": "複數"}</div>`).join(''),
                    "射程": Object.values(Firearm[firearm_name]).map(weapon => `<div>${weapon.min_range} ~ ${weapon.max_range}</div>`).join(''),
                    "裝彈數": Object.values(Firearm[firearm_name]).map(weapon => `<div>${weapon.capacity}</div>`).join(''),
                    "裝彈回合數": Object.values(Firearm[firearm_name]).map(weapon => `<div>${weapon.reload_turn}</div>`).join(''),
                    "特性": Object.values(Firearm[firearm_name]).map(weapon =>
                        `<div><ul>${Object.values(weapon.property).map(property =>
                            `<li>${property}</li>`
                        ).join('')}</ul></div>`
                    ).join('')
                });
            }
        });
        return data;
    }

    /**
     * 建立選項
     * @returns {HTMLSelectElement}
     */
    static create_options() {

        let select_element = document.createElement('select');
        select_element.id = 'firearm_select';

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        Object.values(Firearm.LIST).forEach((firearm_name) => {
            if (Firearm[firearm_name] ?? null) {
                const new_option = document.createElement('option')
                new_option.textContent = firearm_name;
                new_option.dataset.id = firearm_name;
                select_element.appendChild(new_option);
            }
        });
        return select_element;
    }
}

const firearm_config = [
    {
        key:"HG",
        data:[
            {
                name:"手槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:3,
                min_range:1,
                capacity:6,
                reload_ammo:6,
                reload_turn:1,
                dice:1,
                fixed_value:0,
                property:[
                    "一次【射擊】可擊發 2 發子彈",
                    "【射擊】時，根據自己與對手距離獲得以下命中加成",
                    "對相鄰敵人【射擊】時，命中+2",
                    "距離 1~2 格 時，命中+1",
                    "距離 4 格以外時，命中-2",
                    "【裝彈】時，子彈威力定為[1D6]"
                ]
            }
        ]
    },
    {
        key:"AR",
        data:[
            {
                name:"突擊步槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:4,
                min_range:1,
                capacity:10,
                reload_ammo:10,
                reload_turn:2,
                dice:2,
                fixed_value:0,
                property:[
                    "一次【射擊】可擊發 3 發子彈",
                    "【射擊】時，基本傷害+1",
                    "【裝彈】時，子彈威力定為[2D6]"
                ]
            }
        ]
    },
    {
        key:"SMG",
        data:[
            {
                name:"衝鋒槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:3,
                min_range:1,
                capacity:10,
                reload_ammo:10,
                reload_turn:2,
                dice:1,
                fixed_value:0,
                property:[
                    "一次【射擊】可擊發 4 發子彈",
                    "【射擊】時，命中+1",
                    "【裝彈】時，子彈威力定為[1D6]"
                ]
            }
        ]
    },
    {
        key:"LMG",
        data:[
            {
                name:"輕機槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:4,
                min_range:2,
                capacity:12,
                reload_ammo:12,
                reload_turn:2,
                dice:2,
                fixed_value:0,
                property:[
                    "進行持續 2 回合且無法中斷的【射擊】，第 1 回合【射 擊】擊發子彈數 5， 第 2 回合【射擊】擊發子彈數 7",
                    "【裝彈】時，子彈威力定為[2D6]",
                ]
            }
        ]
    },
    {
        key:"MMG",
        data:[
            {
                name:"中型機槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:5,
                min_range:2,
                capacity:16,
                reload_ammo:16,
                reload_turn:3,
                dice:3,
                fixed_value:0,
                property:[
                    "進行持續 2 回合且無法中斷的【射擊】。第 1 回合【射 擊】擊發子彈數 7， 第 2 回合【射擊】擊發子彈數 9",
                    "【射擊】時，命中-1",
                    "【裝彈】時，子彈威力定為[3D6]"
                ]
            }
        ]
    },
    {
        key:"HMG",
        data:[
            {
                name:"重機槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:6,
                min_range:3,
                capacity:20,
                reload_ammo:20,
                reload_turn:4,
                dice:4,
                fixed_value:0,
                property:[
                    "進行持續 2 回合且無法中斷的【射擊】，第 1 回合【射 擊】擊發子彈數 9， 第 2 回合【射擊】擊發子彈數 11",
                    "【射擊】時，命中-3",
                    "【裝彈】時，子彈威力定為[4D6]"
                ]
            }
        ]
    },
    {
        key:"SR",
        data:[
            {
                name:"狙擊步槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:6,
                min_range:3,
                capacity:5,
                reload_ammo:5,
                reload_turn:2,
                dice:5,
                fixed_value:0,
                property:[
                    "無法連續 2 回合進行【射擊】",
                    "【射擊】時，命中+5",
                    "【裝彈】時，子彈傷害定為[5D6]"
                ]
            }
        ]
    },
    {
        key:"SR",
        data:[
            {
                name:"狙擊步槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:6,
                min_range:3,
                capacity:5,
                reload_ammo:5,
                reload_turn:2,
                dice:5,
                fixed_value:0,
                property:[
                    "無法連續 2 回合進行【射擊】",
                    "【射擊】時，命中+5",
                    "【裝彈】時，子彈傷害定為[5D6]"
                ]
            }
        ]
    },
    {
        key:"SG",
        data:[
            {
                name:"散彈槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:1,
                min_range:1,
                capacity:3,
                reload_ammo:3,
                reload_turn:1,
                dice:2,
                fixed_value:0,
                property:[
                    "【射擊】時，若爆擊則基本傷害變為 2 倍",
                    "【射擊】時，命中+2",
                    "【裝彈】時，子彈傷害定為[2D6]"
                ]
            }
        ]
    },
    {
        key:"RL",
        data:[
            {
                name:"火箭彈發射器",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:10,
                min_range:4,
                capacity:1,
                reload_ammo:1,
                reload_turn:2,
                dice:3,
                fixed_value:0,
                property:[
                    "【射擊】時，基本傷害+10",
                    "【射擊】時，命中+1",
                    "【裝彈】時，子彈傷害定為[3D6]"
                ]
            }
        ]
    },
    {
        key:"GL",
        data:[
            {
                name:"榴彈發射器",
                target:Firearm.TARGET_TYPE.MANY,
                max_range:5,
                min_range:3,
                capacity:3,
                reload_ammo:3,
                reload_turn:2,
                dice:3,
                fixed_value:2,
                property:[
                    "【射擊】時，選擇射程內 1 格。對該格子為中心的圓形範 圍 9 格內所有對象進行【射擊】",
                    "【射擊】時，基本傷害+3",
                    "【裝彈】時，子彈傷害定為[3D6+2]"
                ]
            }
        ]
    },
    {
        key:"MT",
        data:[
            {
                name:"迫擊砲",
                target:Firearm.TARGET_TYPE.MANY,
                max_range:15,
                min_range:6,
                capacity:1,
                reload_ammo:1,
                reload_turn:2,
                dice:3,
                fixed_value:2,
                property:[
                    "【射擊】時，選擇射程內 1 格。對該格子為中心的圓形費 為 13 格內所有對象進行【射擊】",
                    "【射擊】時，基本傷害+10",
                    "【射擊】時，命中+4",
                    "【裝彈】時，子彈傷害定為[3D6+2]"
                ]
            }
        ]
    },
    {
        key:"RG",
        data:[
            {
                name:"軌道砲",
                target:Firearm.TARGET_TYPE.MANY,
                max_range:10,
                min_range:1,
                capacity:20,
                reload_ammo:1,
                reload_turn:1,
                dice:1,
                fixed_value:0,
                property:[
                    "戰鬥開始前，從子彈數 0 開始進行【裝彈】直至子彈欄內 合計數值 20 以上",
                    "此武器進行【裝彈】時，不重置裝彈數僅在子彈欄內追加 1 發[1D6]。此數值不受技能影響",
                    "子彈欄內合計數值 20 以上才能進行【射擊】。【射擊】 時，對直線範圍 10×1 格子內所有對象進行【射擊】",
                    "【射擊】時，子彈威力定為「子彈欄內合計數值×(11- 與對象距離)」",
                    "【射擊】後裝彈數變為 0。 此武器可在 【裝彈】同時發動技能"
                ]
            }
        ]
    },
    {
        key:"FT",
        data:[
            {
                name:"火焰噴射器",
                target:Firearm.TARGET_TYPE.MANY,
                max_range:1,
                min_range:1,
                capacity:20,
                reload_ammo:5,
                reload_turn:1,
                dice:1,
                fixed_value:0,
                property:[
                    "一次【射擊】可擊發 10 發子彈",
                    "一次【裝彈】只能裝填 5 發子彈。戰鬥開始時能裝填 20發子彈",
                    "【射擊】時，命中-3。【射擊】時，對扇形範圍4格子內所有對象進行【射擊】",
                    "【裝彈】時，子彈傷害定為[1D6]"
                ]
            }
        ]
    },
    {
        key:"AR&GL",
        data:[
            {
                name:"突擊步槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:4,
                min_range:1,
                capacity:10,
                reload_ammo:10,
                reload_turn:2,
                dice:2,
                fixed_value:0,
                property:[
                    "一次【射擊】可擊發 3 發子彈",
                    "射擊傷害+1",
                    "【裝彈】時，子彈傷害定為[2D6]"
                ]
            },
            {
                name:"榴彈發射器",
                target:Firearm.TARGET_TYPE.MANY,
                max_range:4,
                min_range:2,
                capacity:1,
                reload_ammo:1,
                reload_turn:1,
                dice:1,
                fixed_value:2,
                property:[
                    "【射擊】時，選擇射程內 1 格。對該格子為中心的十字範 圍 5 格內所有對象進行【射擊】",
                    "射擊傷害+1",
                    "【裝彈】時，子彈傷害定為[1D6+2]"
                ]
            }
        ]
    },
    {
        key:"SMG&SMG",
        data:[
            {
                name:"衝鋒槍1",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:3,
                min_range:1,
                capacity:10,
                reload_ammo:10,
                reload_turn:1,
                dice:0,
                fixed_value:2,
                property:[
                    "一次【射擊】可擊發 4 發子彈",
                    "以衝鋒槍1進行【射擊】後可以衝鋒槍2進行【射擊】",
                    "【裝彈】時，子彈傷害定為[2]"
                ]
            },
            {
                name:"衝鋒槍2",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:3,
                min_range:1,
                capacity:10,
                reload_ammo:10,
                reload_turn:1,
                dice:0,
                fixed_value:2,
                property:[
                    "一次【射擊】可擊發 4 發子彈",
                    "【射擊】時，命中-1",
                    "【裝彈】時，子彈傷害定為[2]"
                ]
            }
        ]
    },
    {
        key:"SG&SG",
        data:[
            {
                name:"散彈槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:1,
                min_range:1,
                capacity:3,
                reload_ammo:3,
                reload_turn:1,
                dice:2,
                fixed_value:0,
                property:[
                    "【射擊】時，爆擊時基本傷害變為 2 倍",
                    "【射擊】時，命中+2",
                    "【裝彈】時，子彈傷害定為[2D6]"
                ]
            },
            {
                name:"散彈槍",
                target:Firearm.TARGET_TYPE.ONE,
                max_range:1,
                min_range:1,
                capacity:1,
                reload_ammo:1,
                reload_turn:1,
                dice:2,
                fixed_value:0,
                property:[
                    "【射擊】時，爆擊時基本傷害變為 2 倍",
                    "【射擊】時，命中+2",
                    "【裝彈】時，子彈傷害定為[2D6]"
                ]
            }
        ]
    },
];

Firearm.initialize()