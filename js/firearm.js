/**
 * 武器
 */
class Firearm {
    /**
     * 目標類型
     * @type {{ONE: number, MANY: number}}
     */
    static TARGET_TYPE = {
        /**
         * 單一
         */
        ONE:1,
        /**
         * 複數
         */
        MANY:2
    };
    // todo: LMG,MMG,HMG 不能在射擊中移動
    static types = {
        /**
         * 手槍
         */
        HG:{
            ID: 1,
            /**
             * 名稱
             */
            name: "手槍",
            /**
             * 武器
             */
            weapon: {
                HG:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 3,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 6,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 1,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "一次【射擊】可擊發 2 發子彈",
                        "【射擊】時，根據自己與對手距離獲得以下命中加成",
                        "對相鄰敵人【射擊】時，命中+2",
                        "距離 1~2 格 時，命中+1",
                        "距離 4 格以外時，命中-2",
                        "【裝彈】時，子彈威力定為[1D6]"
                    ]
                }
            }
        },
        /**
         * 突擊步槍
         */
        AR:{
            ID: 2,
            /**
             * 名稱
             */
            name: "突擊步槍",
            /**
             * 武器
             */
            weapon: {
                AR:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 4,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 10,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 2,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "一次【射擊】可擊發 3 發子彈",
                        "【射擊】時，基本傷害+1",
                        "【裝彈】時，子彈威力定為[2D6]"
                    ]
                }
            }
        },
        /**
         * 衝鋒槍
         */
        SMG:{
            ID: 3,
            /**
             * 名稱
             */
            name: "衝鋒槍",
            /**
             * 武器
             */
            weapon: {
                SMG:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 3,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 10,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 1,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "一次【射擊】可擊發 4 發子彈",
                        "【射擊】時，命中+1",
                        "【裝彈】時，子彈威力定為[1D6]"
                    ]
                }
            }
        },
        /**
         * 輕機槍
         */
        LMG:{
            ID: 4,
            /**
             * 名稱
             */
            name: "輕機槍",
            /**
             * 武器
             */
            weapon: {
                LMG:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 4,
                    /**
                     * 最小射程
                     */
                    min_range: 2,
                    /**
                     * 裝彈數
                     */
                    capacity: 12,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 2,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "進行持續 2 回合且無法中斷的【射擊】，第 1 回合【射 擊】擊發子彈數 5， 第 2 回合【射擊】擊發子彈數 7",
                        "【裝彈】時，子彈威力定為[2D6]",
                    ]
                }
            }
        },
        /**
         * 中型機槍
         */
        MMG:{
            ID: 5,
            /**
             * 名稱
             */
            name: "中型機槍",
            /**
             * 武器
             */
            weapon: {
                MMG:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 5,
                    /**
                     * 最小射程
                     */
                    min_range: 2,
                    /**
                     * 裝彈數
                     */
                    capacity: 16,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 3,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 3,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "進行持續 2 回合且無法中斷的【射擊】。第 1 回合【射 擊】擊發子彈數 7， 第 2 回合【射擊】擊發子彈數 9",
                        "【射擊】時，命中-1",
                        "【裝彈】時，子彈威力定為[3D6]"
                    ]
                }
            }
        },
        /**
         * 重機槍
         */
        HMG:{
            ID: 6,
            /**
             * 名稱
             */
            name: "重機槍",
            /**
             * 武器
             */
            weapon: {
                HMG:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 6,
                    /**
                     * 最小射程
                     */
                    min_range: 3,
                    /**
                     * 裝彈數
                     */
                    capacity: 20,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 4,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 4,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "進行持續 2 回合且無法中斷的【射擊】，第 1 回合【射 擊】擊發子彈數 9， 第 2 回合【射擊】擊發子彈數 11",
                        "【射擊】時，命中-3",
                        "【裝彈】時，子彈威力定為[4D6]"
                    ]
                }
            }
        },
        /**
         * 狙擊步槍
         */
        SR:{
            ID: 7,
            /**
             * 名稱
             */
            name: "狙擊步槍",
            /**
             * 武器
             */
            weapon: {
                SR:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 6,
                    /**
                     * 最小射程
                     */
                    min_range: 3,
                    /**
                     * 裝彈數
                     */
                    capacity: 5,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 5,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "無法連續 2 回合進行【射擊】",
                        "【射擊】時，命中+5",
                        "【裝彈】時，子彈傷害定為[5D6]"
                    ]
                }
            }
        },
        /**
         * 散彈槍
         */
        SG:{
            ID: 8,
            /**
             * 名稱
             */
            name: "散彈槍",
            /**
             * 武器
             */
            weapon: {
                SG:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 1,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 3,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 2,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "【射擊】時，若爆擊則基本傷害變為 2 倍",
                        "【射擊】時，命中+2",
                        "【裝彈】時，子彈傷害定為[2D6]"
                    ]
                }
            }
        },
        /**
         * 火箭彈發射器
         */
        RL:{
            ID: 9,
            /**
             * 名稱
             */
            name: "火箭彈發射器",
            /**
             * 武器
             */
            weapon: {
                RL:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 10,
                    /**
                     * 最小射程
                     */
                    min_range: 4,
                    /**
                     * 裝彈數
                     */
                    capacity: 1,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 3,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "【射擊】時，基本傷害+10",
                        "【射擊】時，命中+1",
                        "【裝彈】時，子彈傷害定為[3D6]"
                    ]
                }
            }
        },
        /**
         * 榴彈發射器
         */
        GL:{
            ID: 10,
            /**
             * 名稱
             */
            name: "榴彈發射器",
            /**
             * 武器
             */
            weapon: {
                GL:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.MANY,
                    /**
                     * 最大射程
                     */
                    max_range: 5,
                    /**
                     * 最小射程
                     */
                    min_range: 3,
                    /**
                     * 裝彈數
                     */
                    capacity: 3,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 3,
                        FIXED_VALUE: 2
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "【射擊】時，選擇射程內 1 格。對該格子為中心的圓形範 圍 9 格內所有對象進行【射擊】",
                        "【射擊】時，基本傷害+3",
                        "【裝彈】時，子彈傷害定為[3D6+2]"
                    ]
                }
            }
        },
        /**
         * 迫擊砲
         */
        MT:{
            ID: 11,
            /**
             * 名稱
             */
            name: "迫擊砲",
            /**
             * 武器
             */
            weapon: {
                MT:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.MANY,
                    /**
                     * 最大射程
                     */
                    max_range: 15,
                    /**
                     * 最小射程
                     */
                    min_range: 6,
                    /**
                     * 裝彈數
                     */
                    capacity: 1,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 3,
                        FIXED_VALUE: 2
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "【射擊】時，選擇射程內 1 格。對該格子為中心的圓形費 為 13 格內所有對象進行【射擊】",
                        "【射擊】時，基本傷害+10",
                        "【射擊】時，命中+4",
                        "【裝彈】時，子彈傷害定為[3D6+2]"
                    ]
                }
            }
        },
        /**
         * 軌道砲
         */
        RG:{
            ID: 12,
            /**
             * 名稱
             */
            name: "軌道砲",
            /**
             * 武器
             */
            weapon: {
                RG:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.MANY,
                    /**
                     * 最大射程
                     */
                    max_range: 10,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 20,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 1,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "戰鬥開始前，從子彈數 0 開始進行【裝彈】直至子彈欄內 合計數值 20 以上",
                        "此武器進行【裝彈】時，不重置裝彈數僅在子彈欄內追加 1 發[1D6]。此數值不受技能影響",
                        "子彈欄內合計數值 20 以上才能進行【射擊】。【射擊】 時，對直線範圍 10×1 格子內所有對象進行【射擊】",
                        "【射擊】時，子彈威力定為「子彈欄內合計數值×(11- 與對象距離)」",
                        "【射擊】後裝彈數變為 0。 此武器可在 【裝彈】同時發動技能"
                    ]
                }
            }
        },
        /**
         * 火焰噴射器
         */
        FT:{
            ID: 13,
            /**
             * 名稱
             */
            name: "火焰噴射器",
            /**
             * 武器
             */
            weapon: {
                FT:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.MANY,
                    /**
                     * 最大射程
                     */
                    max_range: 1,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 20,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 1,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "一次【射擊】可擊發 10 發子彈",
                        "一次【裝彈】只能裝填 5 發子彈。戰鬥開始時能裝填 20發子彈",
                        "【射擊】時，命中-3。【射擊】時，對扇形範圍4格子內所有對象進行【射擊】",
                        "【裝彈】時，子彈傷害定為[1D6]"
                    ]
                }
            }
        },
        /**
         * AR&GL
         */
        "AR&GL":{
            ID: 14,
            /**
             * 名稱
             */
            name: "AR&GL",
            /**
             * 武器
             */
            weapon: {
                AR:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 4,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 10,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 2,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 2,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "一次【射擊】可擊發 3 發子彈",
                        "射擊傷害+1",
                        "【裝彈】時，子彈傷害定為[2D6]"
                    ]
                },
                GL:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.MANY,
                    /**
                     * 最大射程
                     */
                    max_range: 4,
                    /**
                     * 最小射程
                     */
                    min_range: 2,
                    /**
                     * 裝彈數
                     */
                    capacity: 1,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 1,
                        FIXED_VALUE: 2
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "【射擊】時，選擇射程內 1 格。對該格子為中心的十字範 圍 5 格內所有對象進行【射擊】",
                        "射擊傷害+1",
                        "【裝彈】時，子彈傷害定為[1D6+2]"
                    ]
                }
            }
        },
        /**
         * SMG&SMG
         */
        "SMG&SMG":{
            ID: 15,
            /**
             * 名稱
             */
            name: "SMG&SMG",
            /**
             * 武器
             */
            weapon: {
                SMG1:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 3,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 10,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 0,
                        FIXED_VALUE: 2
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "一次【射擊】可擊發 4 發子彈",
                        "以 SMG1進行 【射擊】後可以 SMG2進行【射擊】",
                        "【裝彈】時，子彈傷害定為[2]"
                    ]
                },
                SMG2:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 3,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 10,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 0,
                        FIXED_VALUE: 2
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "一次【射擊】可擊發 4 發子彈",
                        "【射擊】時，命中-1",
                        "【裝彈】時，子彈傷害定為[2]"
                    ]
                }
            }
        },
        /**
         * SG&SG
         */
        "SG&SG":{
            ID: 15,
            /**
             * 名稱
             */
            name: "SG&SG",
            /**
             * 武器
             */
            weapon: {
                SG1:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 1,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 3,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 2,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "【射擊】時，爆擊時基本傷害變為 2 倍",
                        "【射擊】時，命中+2",
                        "【裝彈】時，子彈傷害定為[2D6]"
                    ]
                },
                SG2:{
                    /**
                     * 對象
                     */
                    target: Firearm.TARGET_TYPE.ONE,
                    /**
                     * 最大射程
                     */
                    max_range: 1,
                    /**
                     * 最小射程
                     */
                    min_range: 1,
                    /**
                     * 裝彈數
                     */
                    capacity: 1,
                    /**
                     * 裝彈回合數
                     */
                    reload_round: 1,
                    /**
                     * 裝彈時子彈威力
                     */
                    damage: {
                        DICE: 2,
                        FIXED_VALUE: 0
                    },
                    /**
                     * 特性
                     */
                    property:[
                        "【射擊】時，爆擊時基本傷害變為 2 倍",
                        "【射擊】時，命中+2",
                        "【裝彈】時，子彈傷害定為[2D6]"
                    ]
                }
            }
        },
    }
}