import {NgModule} from '@angular/core'
import {ItemMangerOrchestrator} from "./components/orchestrators/itemManager/ItemManager.component";
import {ItemDetailsOrchestrator} from "./components/orchestrators/itemDetails/ItemDetails.component";
import {ItemListOrchestrator} from "./components/orchestrators/itemList/ItemList.component";
import {FormModule} from "../form/form.module";
import {ModalModule} from "../modal/Modal.module";
import {BrowserModule} from "@angular/platform-browser";
import {ItemDetailsPresentation} from "./components/presentational/itemDetails/ItemDetails.component";
import {ItemListPresentation} from "./components/presentational/itemList/ItemList.component";
import {SelectedItemPresentation} from "./components/presentational/selectedItem/SelectedItem.component";

@NgModule({
  declarations: [ItemDetailsOrchestrator, ItemDetailsPresentation, ItemListOrchestrator, ItemListPresentation, ItemMangerOrchestrator, SelectedItemPresentation],
  imports     : [BrowserModule, FormModule, ModalModule],
  exports     : [ItemListOrchestrator]
})
export class ResourceManagerModule {}
