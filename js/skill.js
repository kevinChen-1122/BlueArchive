/**
 * 技能
 */
class Skill {
    /**
     * 技能種類
     * @type {{SUB_SKILL: number, EX_SKILL: number, PASSIVE_SKILL: number, NORMAL_SKILL: number}}
     */
    static SKILL_TYPES = {
        EX_SKILL: 1,
        NORMAL_SKILL: 2,
        PASSIVE_SKILL: 3,
        SUB_SKILL: 4,
        CLASS_SKILL: 5
    };

    static  EX_SKILL = [
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 2 回合(「最大體力 ×0.5」的護盾)、3 回合「△防禦力+4」。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 1 回合「△攻擊力 +20」。對以射程內 1 格為中心圓形範圍 9 內的全員造成「攻擊力×1」的傷害。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心圓形範圍 9 內全員賦予 1 回合「敏捷+2」。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 10 回合《T.S.狀 態》、「△攻擊力 +3」、「△防禦力 +6」。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人進行10次【治療】。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 2,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "回復自己體力「治癒力× 3」。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "在子彈欄內裝填子彈威力 定為「2」與武器裝彈數相同數量的子彈。(此技能不視為【裝彈】) "
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 人為中心圓形範圍 9 全員造成「攻擊力×2」的傷害，賦予 2 回合「▼敏捷-3」、「▼ 迴避-3」。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "回復自己體力「現在體力 ×0.5」，獲得 8 回合 《T.S.狀態》。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "選擇 1 格可進入格子。使以該格子為中心圓形範圍 13 最近友方 1 人【移 動】至該格子並進行 5 次【治療】(此【移動 】可無視路徑上不可進入格子)。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以相鄰 1 格為起點扇形範圍 4 全員造成「攻擊力 ×1」的傷害。自己【移 動】2 格"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊力×5」的傷害。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心圓形範圍13全員賦予2回合(「治癒力×15」的護盾)。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 2 回合《T.S.狀 態》、《射程 1》、「△ 攻擊力+4」、「△敏捷 +10」。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心圓形範圍 13 友方全員進行 5 次【治療】。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "可【移動】「移動力× 2」，獲得「△防禦力 +3」。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以相鄰 1 格為起點直線範圍 3×5 全員造成「攻擊力×3」的傷害。 "
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心圓形範圍 9 全員造成「攻擊力×2」的傷害，賦予 2 回合「▼移動力-1」。 "
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 5 回合《T.S.狀 態》、「△移動力 0」、 「△射程+10」。 "
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內任意人數造成「攻擊力×10」的傷害、 進行 5 次【治療】。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 4 回合「△防禦力 +4」，對射程內敵方全員賦予 4 回合《挑釁狀態》"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以相鄰 1 格為起點直線 範圍 1×20 敵方全員造成「攻擊力×2」的傷害 (此傷害視為【射擊】的爆擊傷害)。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心圓 形範圍 13 的格子賦予《回合開始時，對在此格的全員造成 30 傷害》 "
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 人為起點扇形範圍4全員造成3次「攻擊力×2」的傷害，《T.S.狀態》時，扇形範圍 4 變為扇形範圍 9。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程外 1 人造成「治癒力×10」的傷害，、射程 內 1 人造成「治癒力× 3」的傷害、對自己造成「現在體力×0.5」的傷害。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "回復自己體力「治癒力× 1」，獲得 2 回合《回合結束時回復自己體力「防禦力×2」》。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "選擇射程內 3 個格子，對以選擇格子為中心圓形範圍 9 全員造成「攻擊力× 1」的傷害。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內友方 1 人賦予 2 回合「△全部【攻擊】觸發爆擊」。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得《T.S.狀態》、 (「最大體力×2」的護盾)。護盾解除的該回合結束時解除《T.S.狀 態》。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人進行3次【治療】，賦予(「治癒力×1」的護盾)。 "
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊力×2」的傷害，賦予 3 回合「▼命中數-2」。 "
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊力×3」的傷害。賦予 3 回合《回合開始時對自己造成「自己攻擊力×1」的傷害》。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "【移動】至射程內 1 格後獲得 3 回合「△攻擊力+2」、「△敏捷+1」、「△移動力+1」。 "
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人造成5次「攻擊力×1」的傷害，《T.S.狀態》時再造成 5 次「攻擊力×1」的傷害。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人解除「▼ Debuff」，進行 5 次【治療】。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 2 回合「▼攻擊力-4」、「△防禦力+8」、 「▼迴避-4」、「▼命中數-6」、「△群控效果無效」。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊力×3」的傷害。賦予 3 回合《回合開始時對自己造成「自己防禦力×1」的傷害》。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊力×3」的傷害。若自己的攻擊類型和對象的防禦類型相性有利時，賦予《暈厥狀態》。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 4 回合《T.S.狀 態》、「△攻擊力 +4」、「△迴避 +10」。基本技能變為「受到傷害為 0 時，給予攻擊方 20 的傷害(無 CT)」。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "5 回合內對以自身為中心對圓形範圍 25 體力最低的友方1人進行1次或2次【治療】，此技能每次進行【治療】同時對自己造成「治癒力×1」的傷害。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "解除自己的「△Buff」、「▼Debuff」、(護盾)、《狀態》，獲得(「現在體力×3」的護盾)。獲得 2 回合「△回合結束時解除獲得的(護盾)，對自己造成相同數值的傷害」。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "RG專用技能。根據《能量》的充電階段(0/1/2)對射程內 1 人造成「子彈欄內合計數值×(1/2/4)」的傷害。《能量》的充電階段變為 0。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心十字範圍5全員賦予2回合「▼防禦力-2」、造成 「攻擊力×2」的傷害。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 6 回合《T.S.狀 態》、「△移動力 +2」、「△治癒力 +20」，《《T.S.狀態》時回合開始時對以自己為中心圓形範圍 25 友方全員進行 2 次【治療】》。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "【移動】至射程內 1 格後獲得 2 回合《移動力 0》、《回合結束時，對以自己為中心圓形範圍 13 友方全員進行 5 次【治療】》。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人賦予2回合「▼迴避-2」、造成「攻擊力×2」的傷害。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊力×2」的傷害。對以該對象為中心圓形範圍 9 全員造成「攻擊力×2」的傷害。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心圓形範圍 9 全員造成「攻擊力×3」的傷害，賦予 2 回合《暈厥狀態》。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內最多 5 人造成「攻擊力×3」的傷害，《T.S.狀態》時再造成「攻擊力×3」的傷害。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人進行3次【治療】。賦予 2 回合(回復超出最大體力數值分的護盾)。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "消耗全部《盾》並獲得消耗數x1SP。對射程內 1 人造成「防禦力×3」的傷害。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "消耗全部《矛》並獲得消 耗數x1SP。對射程內 1 人造成「攻擊力×3」的傷害。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 1,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人賦予1回合「△攻擊力+5」、「△爆擊觸發數+1」。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊力×6」的傷害。獲得 《T.S.狀態》、「▼攻擊力-6」、「▼敏捷-8」。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人進行5次【治療】。獲得「▼攻擊力-2」。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "根據令自己能力值產生變化的(「△Buff」、「▼ Debuff」、《狀態》)，每有 1 種回復自己體力 1 次「最大體力× 0.3」後獲得(「現在體力×30」的護盾)。獲得《回合結束時若有護盾則體力變為 0。(不可解除)》、《不可被回復。(不可解除)》。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對自己及射程內 1 人造成 5 次「攻擊力×2」的傷害。若友方有好感度『視如至親』對象則再追加 3 次、此 EX 技能對自己造成傷害變為0、獲得 2 回合「△攻擊力+4」。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "選擇射程內 1 人使其在自己行動後行動(若該對象已行動則無法行動)。對象的好感度為『視如至親』時，賦予 2 回合「△ 攻擊力+4」、若已行動則可以再行動。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 5 回合《T.S.狀態》、《攻擊力 0》、 「△防禦力+30」、「△ 移動力+3」。《T .S.狀態》時變為解除《T.S.狀態》並對射程內任意人數造成「《T.S.狀態》持續 回合數×10」的傷害。 "
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人進行5次【治療】。若友方有好感度『視如至親』對象則再進行 5 次【治療】、賦予 5 回合《回合結束時回復自己體力「最大體力× 0.1」》。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內敵方全員賦予 2 回合《挑釁狀態》"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅可以在【裝彈】中使 用。EX 技能發動同時完成【裝彈】，【攻擊】範圍變為對相鄰 1 格扇形範圍 4 直至下次【裝彈】。 "
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "使射程內 1 人下次使用 EX 技能所需 變為1/2(小數點進位)。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 1 回合《T.S.狀態》、「△攻擊力+30」、《防禦力 0》、 《迴避 0》、《移動力 0》、《命中數-5(無效T.S.必中，爆擊必中有效)》。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內最多 2 人解除 1 個「▼Debuff」、進行 3 次【治療】。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "在射程內 1 格召喚具自己「最大體力×0.3」體力、防禦力 10、迴避 0、移動力 0 的誘餌。誘餌對以自身為中心圓形範圍 25 敵方全員賦予《挑釁狀態》。誘餌在 4 回合後的回合結束時消滅(不視為退場)。"
            ],
        },
        {
            class_type: "ATTACKER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "在射程內 1 格召喚具自己「最大體力×0.3」體力、自己攻擊力、防禦力 3、迴避 0、移動力 0 的砲台。回合結束時，砲台對以自身為中心圓形範圍 25 內最近敵方 1 人造成「攻擊力×1」的傷害。 砲台在 4 回合後的回合結束時消滅(不視為退場)。"
            ],
        },
        {
            class_type: "SUPPORTER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "在射程內 1 格設置可以破壞、不可穿越掩體。此掩體具體力50、《回合開始時，對以自身為中心圓形範圍9全員賦予1回合「△防禦力+1」》。 掩體在 3 回合後的回合結束時破壞。"
            ],
        },
        {
            class_type: "TACTICAL",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 6 回合《T.S.狀 態》、「△射程+1」、「△攻擊力+20」、「△ 防禦力-10(視為Buff)」，基本技能追加《T.S.狀態》時對射程內 1 人造成 3 次「攻擊力× 1」的傷害。"
            ],
        },
        {
            class_type: "HEALER",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內友方及敵方 1 人解除全部「△Buff」、「▼Debuff」。給予解除「「▼Debuff」能力值變化量×2」+「「△ Buff」能力值變化量×1」的傷害(不可選擇無「△Buff」、「▼ Debuff」對象)。"
            ],
        },
        {
            class_type: "TANK",
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "將自己及射程內 1 人的可以解除「△Buff」、「▼Debuff」交換。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成該對象 「「△Buff」 能力值變 化量×5」的傷害。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "將射程內 1 人可以解除 「△Buff」、「▼ Debuff」的正負逆轉。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊 力×5」的傷害，《T .S. 狀態》時再解除對象的 1 個「△Buff」。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人，解除最多 3 個「▼Debuff」。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "代替射程內 1 人承受這回 合內的傷害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅【襲擊】時可以使用， 對射程內 1 人造成「攻擊 力×20」的傷害。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內敵方全員賦予 2 回合《恐懼狀態》。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊 力×2」的傷害，《T .S. 狀態》時再賦予 2 回合 《暈眩狀態》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅【襲擊】時可以使用， 獲得 10 回合《無敵》。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內友方全員賦予 4 回合「△防禦力+5」。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊 力×4」的傷害。對象為 《群控狀態》時再延長該 狀態 1 回合。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 1,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "選擇射程內相同數量的友 方(可以包含自己)及敵 方賦予 2 回合《暈眩狀 態》。若包含自己則造成 全員「攻擊力×10」的傷 害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "解除持續回合數最長的 「▼Debuff」並獲得相 同回合數的《T .S.狀 態》。若已獲得《T .S.狀 態》則延長相同回合數。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 3 回合《【射擊】時 不造成傷害並回復相同數 值的體力》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 1 回合《無敵》。對 射程內敵方全員賦予 3 回 合《挑釁狀態》。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 2 回合「△爆擊觸發 數+1」。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人賦予1回 合《全部【攻擊】不觸發 爆擊》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "消耗全部 。獲得消耗 ×1 回合「△受到傷害 -200」。(最低 ， 《T.S.狀態》時為 )"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 2,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅【打擊】造成傷害時可 以使用。回合結束時，進 行 1 次【攻擊】、【治 療】。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅自己成為 EX 技能的對 象時可以使用。該 EX 技 能造成傷害減半(小數點 進位)。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅相鄰1人使用EX技能 的回合結束時可以使用， 自己使用相同 EX 技能。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅射程內敵方或友方使用 EX 技能可以使用。無效 該 EX 技能並結束使用者 那回合的行動(使用者的  會消耗)。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅《T .S.狀態》時可以使 用。獲得《《T .S.狀態》 時獲得《無敵》》(【戰 鬥】中僅可以使用 1 次)。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內 1 格為中心圓 形範圍 9 的格子賦予 5 回合《回合結束時，對在 此格的友方全員進行 2 次 【治療】》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 1,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "下個回合開始時，獲得 1 回合《無敵》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊 力×此 EX 技能消耗  數」的傷害。(消耗全部 )"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人或自己賦予 2 回合「△群控效果無 效」。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 1 回合《T.S 状 態》、《受到傷害時，可 以進行【攻擊】(限定 1 次)》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "解除射程內 3 人的全部 「▼Debuff」。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "射程內無任何對象時獲得 (「防禦力×5」的護 盾)。射程內有任何對象 時獲得(「攻擊力×3」 的護盾)。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊 力×1」的傷害。2 回合 後的回合結束時造成「此 EX 技能後對象受到傷害 的合計數值」的傷害。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 2,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程外1人賦予3回 合「▼防禦力-10」、造 成「攻擊力×3」的傷 害。此技能不會選擇同一 對象並重複發動直至無任 何對象。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "將射程內已獲得《T .S.狀 態》1 人的可以解除「△ Buff」、「▼ Debuff」、《狀態》轉 移至自己(持續回合數相 同轉移前)。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "僅【射擊】後可以使用。 回復自己體力「此前【射 擊】造成的傷害」後對 【射擊】對象造成「自己 最大體力-現在體力」的 傷害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對自己及射程內友方全員 賦予(100+「射程內敵 方數量×20」的護盾)。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「攻擊 力×2」的傷害。自己敏 捷高於對象時再造成「雙 方敏捷差×3」的傷害後 獲得 2 回合「△敏捷 +1」。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "選擇射程內友方 1 人使 用，將對象及自己的裝彈 數全消耗或裝填至上限。 若消耗則回復對象及自己 體力 100;若裝填則造成 對象及自己 600 的傷 害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「對象 攻擊力×2」的傷害， 《T .S.狀態》時再造成 「對象防禦力×3」的傷害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內 1 人造成「治癒力×5」的傷害。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對自己及現在體力最低的 友方 1 人賦予(「治癒力 ×5」的護盾)。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內敵方全員造成 「攻擊力×1」的傷害。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內1人賦予2回 合《不會成為技能對 象》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 0,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得《受到傷害時，若無 《T .S.狀態》則獲得《T .S.狀態》、《T .S.狀 態》時則解除《T .S.狀 態》(1 回合 1 次)》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "在相鄰 1 格再配置體力 1 的已退場友方 1 人。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內敵方全員賦予 3 回合《挑釁狀態》、2 回 合「▼命中-2」。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 20,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 3 回合「△命中 +3」、「△攻擊力 +5」、《裝彈數為 0 時 進行【裝彈】(立即完 成)》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對自己及射程內友方全員 賦予 3 回合「命中 +2」。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 2,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "使自己體力變為 1。《T.S.狀態》時再造成射 程內全員「攻擊力×20」 的傷害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 2,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內友方 1 人進行 1 次【治療】後將對象與自 己位置交換。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "回復自己體力「治癒力× 5」並移動 2 格。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對敵方全員造成「攻擊力 ×1」的傷害。對自己造 成「最大體力×0.1」的 傷害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內敵方全員賦予 3 回合「▼不可被回復」、 造成「攻擊力×1」的傷 害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 6,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 5 回合《T.S.狀 態》、「△攻擊力 +20」。無已獲得《T .S. 狀態》友方時，賦予友方 1 人 5 回合《T.S.狀 態》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 1 回合「△治癒力 +40」、《可以對體力 0 的友方進行【治療】》。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得(「治癒力×10」的 護盾)。若前 1 回合未 【移動】則對射程內敵方 全員賦予 2 回合《挑釁狀 態》。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 1 回合「△攻擊力+ (此回合【移動】格子 數)」。對射程內敵方 1 人造成「攻擊力×(雙方 距離)」的傷害。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "將射程內敵方 1 人與友方 1 人交換位置。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 4,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對以射程內敵方 1 人為中 心圓形範圍 9 全員造成「攻擊力×5」的傷害。 《T .S.狀態》時再造成 「攻擊力×5」的傷害。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 5,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 2 回合「△治癒力+ (基礎攻擊力)」、5 回 合「攻擊力 0」。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 7,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "使射程外友方 1 人配置在 可進入相鄰 1 格。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 8,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "對射程內友方 1 人及敵方 1 人造成「攻擊力×4」 的傷害。"
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 10,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "使射程內 1 人【移動】至 射程內可【移動】格子。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 3,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "獲得 3 回合《T.S.狀 態》。對射程內敵方最多 3 人進行【射擊】(裝彈 數消耗為 1 次【射擊】 分，此技能進行的【射 擊】轉為對單一對象)。 "
            ],
        },
        {

            class_type: '',
            skill_type: Skill.SKILL_TYPES.EX_SKILL,
            sp: 9,
            ct: 0,
            exploration_attributes: new Exploration_attributes({
                "strength": 0,
                "size": 0,
                "intuition": 0,
                "willpower": 0,
                "mystery": 0,
                "luck": 0
            }),
            battle_attributes: new Battle_attributes({
                "health_point": 0,
                "attack": 0,
                "defense": 0,
                "heal": 0,
                "dexterity": 0,
                "accurate": 0,
                "agility": 0
            }),
            /**
             * 效果
             */
            effect: [
                "賦予友方全員《體力變為 0 的該回合結束時，體力 變為 1》後使自己退場。 "
            ],
        },
    ];


    static NORMAL_SKILL = [];

    static PASSIVE_SKILL = [];

    static SUB_SKILL = [];

    create_options(skill_type) {

        let select_element = document.createElement('select');
        select_element.id = `ex_skill_select`;

        let default_option = document.createElement('option');
        default_option.textContent = '- select an option -';
        default_option.disabled = true;
        default_option.selected = true;
        select_element.appendChild(default_option)

        const skill_list = Skill.EX_SKILL;
        Object.keys(skill_list).forEach((index) => {
            // const equipment_name = skill_list[index][0];
            // const equipment_type = Equipment.TYPES[equipment_name];
            //
            const new_option = document.createElement('option')
            new_option.textContent = `技能 ${index}`;
            new_option.dataset.id = index;
            select_element.appendChild(new_option);
        });
        return select_element;
    }
}