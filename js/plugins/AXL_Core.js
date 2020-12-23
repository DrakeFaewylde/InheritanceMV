//=============================================================================
// AXL_Core.js
//=============================================================================

/*:
 * @plugindesc This contains methods and variables needed by the other Plugins of the AXL library.
 * @author ElectricAxel
 *
 * @help This plugin does not provide plugin commands and has no parameters.
 */

//=============================================================================
//BEGIN GLOBAL BLOCK
//this block has to be out here to become global
//=============================================================================
var AXLLib = AXLLib || {};
AXLLib.version = 1.0;
//=============================================================================
//END GLOBAL BLOCK
//=============================================================================

(function() {
  //Replace game constructor to save our variables
  var _Game_System_Initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function() {
    _Game_System_Initialize.call(this);
    this._AXLVariables = {};
  };

  /**
   * I did not write this method.
   * This will allow us to check if we're in the map scene so we can open text windows.
   *
   * By SumRndmDde
   */
  AXLLib.isOnMap = function() {
    return (
      SceneManager._scene.constructor === Scene_Map &&
      SceneManager._sceneStarted
    );
  };
})();
