class Ex_skill {
    constructor(effect = [], sp = 0, class_type = 1) {
        this.effect = effect;
        this.sp = sp;
        this.class_type = class_type;
    }

    /**
     * 初始化
     */
    static initialize() {
        Object.values(ex_skill_config).forEach(item =>{
            this[1] = new this(item.data.effect, item.data.sp, item.data.class_type);
        });
    }
}

const ex_skill_config = [
    {
        data:{
            effect:[
                "獲得 2 回合(「最大體力 ×0.5」的護盾)、3 回合「△防禦力+4」"
            ],
            sp:5,
            class_type:"TANK"
        }
    },
    {
        data:{
            effect:[],
            sp:5,
            class_type:"ATTACKER"
        }
    },
    {
        data:{
            effect:[],
            sp:5,
            class_type:"SUPPORTER"
        }
    },
    {
        data:{
            effect:[],
            sp:5,
            class_type:"TACTICAL"
        }
    },
    {
        data:{
            effect:[],
            sp:5,
            class_type:"HEALER"
        }
    }
];