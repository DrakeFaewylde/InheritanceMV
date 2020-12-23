//=============================================================================
// FAE_NoGuard.js
//=============================================================================

/*:
 * @plugindesc Removes the Guard command from battle. That's it!
 * @author Drake Faewylde
 * 
 * @help This plugin does not provide plugin commands and has no parameters.
 */

Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addAttackCommand();
        this.addSkillCommands();
        this.addItemCommand();
    }
};