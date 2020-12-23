//=============================================================================
// FAE_LuckAdjustment.js
//=============================================================================

/*:
 * @plugindesc Changes Luck calculation for Effect Rates. Increases the base multiplier
 * from 0.001 to 0.01 effectively increasing Effect Rate chance by 10x.
 * @author Drake Faewylde
 * 
 * @param Luck Multiplier
 * @desc The exact multiplier. 
 * Default is 0.01 (RPG Maker MV Default 0.001)
 * @default 0.01
 *
 * @help This plugin does not provide plugin commands and has no parameters.
 * 
 * Huge thanks to ElectricAxel for helping me with my very first plugin!
 * And thank you for using it! <3
 * 
 * Check out AXL Plugins when you get a chance!
 */

 (function(){

    var parameters = PluginManager.parameters('FAE_LuckAdjustment');
    var luckMultiplier = Number(parameters['Luck Multiplier'] || 0.01);

 Game_Action.prototype.lukEffectRate = function(target) {
    return Math.max(1.0 + (this.subject().luk - target.luk) * luckMultiplier, 0.0);
    };

})();