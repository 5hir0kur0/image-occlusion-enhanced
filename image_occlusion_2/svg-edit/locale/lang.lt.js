/*globals svgEditor */
svgEditor.readLang({
	lang: "lt",
	dir : "ltr",
	common: {
		"ok": "Saugoti",
		"cancel": "Atšaukti",
		"key_backspace": "backspace", 
		"key_del": "delete", 
		"key_down": "down", 
		"key_up": "up", 
		"more_opts": "More Options",
		"url": "URL",
		"width": "Width",
		"height": "Height"
	},
	misc: {
		"powered_by": "Powered by"
	}, 
	ui: {
		"toggle_stroke_tools": "Show/hide more stroke tools",
		"palette_info": "Spustelėkite norėdami keisti užpildo spalvą, perėjimo spustelėkite pakeisti insultas spalva",
		"zoom_level": "Keisti mastelį",
		"panel_drag": "Drag left/right to resize side panel"
	},
	properties: {
		"id": "Identify the element",
		"fill_color": "Keisti užpildyti spalvos",
		"stroke_color": "Keisti insultas spalva",
		"stroke_style": "Keisti insultas brūkšnys stilius",
		"stroke_width": "Keisti insultas plotis",
		"pos_x": "Change X coordinate",
		"pos_y": "Change Y coordinate",
		"linecap_butt": "Linecap: Butt",
		"linecap_round": "Linecap: Round",
		"linecap_square": "Linecap: Square",
		"linejoin_bevel": "Linejoin: Bevel",
		"linejoin_miter": "Linejoin: Miter",
		"linejoin_round": "Linejoin: Round",
		"angle": "Keisti sukimosi kampas",
		"blur": "Change gaussian blur value",
		"opacity": "Pakeisti pasirinkto elemento neskaidrumo",
		"circle_cx": "Keisti ratas&#39;s CX koordinuoti",
		"circle_cy": "Keisti ratas&#39;s CY koordinuoti",
		"circle_r": "Keisti savo apskritimo spindulys",
		"ellipse_cx": "Keisti elipse&#39;s CX koordinuoti",
		"ellipse_cy": "Keisti elipse&#39;s CY koordinuoti",
		"ellipse_rx": "Keisti elipsė &quot;X spindulys",
		"ellipse_ry": "Keisti elipse Y spindulys",
		"line_x1": "Keisti linijos nuo koordinačių x",
		"line_x2": "Keisti linijos baigėsi x koordinuoti",
		"line_y1": "Keisti linijos pradžios y koordinačių",
		"line_y2": "Keisti linijos baigėsi y koordinačių",
		"rect_height": "Keisti stačiakampio aukščio",
		"rect_width": "Pakeisti stačiakampio plotis",
		"corner_radius": "Keisti stačiakampis skyrelį Spindulys",
		"image_width": "Keisti paveikslėlio plotis",
		"image_height": "Keisti vaizdo aukštis",
		"image_url": "Pakeisti URL",
		"node_x": "Change node's x coordinate",
		"node_y": "Change node's y coordinate",
		"seg_type": "Change Segment type",
		"straight_segments": "Straight",
		"curve_segments": "Curve",
		"text_contents": "Keisti teksto turinys",
		"font_family": "Pakeistišriftą Šeima",
		"font_size": "Change font size",
		"bold": "Pusjuodis",
		"italic": "Kursyvas"
	},
	tools: { 
		"main_menu": "Main Menu",
		"bkgnd_color_opac": "Pakeisti fono spalvą / drumstumas",
		"connector_no_arrow": "No arrow",
		"fitToContent": "Talpinti turinys",
		"fit_to_all": "Talpinti All content",
		"fit_to_canvas": "Talpinti drobė",
		"fit_to_layer_content": "Talpinti sluoksnis turinio",
		"fit_to_sel": "Talpinti atrankos",
		"align_relative_to": "Derinti palyginti ...",
		"relativeTo": "palyginti:",
		"puslapis": "puslapis",
		"largest_object": "didžiausias objektas",
		"selected_objects": "išrinktas objektai",
		"smallest_object": "mažiausias objektą",
		"new_doc": "New Image",
		"open_doc": "Atidaryti atvaizdą",
		"export_img": "Export",
		"save_doc": "Išsaugoti nuotrauką",
		"import_doc": "Import SVG",
		"align_to_page": "Align Element to Page",
		"align_bottom": "Lygiuoti apačioje",
		"align_center": "Lygiuoti",
		"align_left": "Lygiuoti kairėje",
		"align_middle": "Suderinti Vidurio",
		"align_right": "Lygiuoti dešinėje",
		"align_top": "Lygiuoti viršų",
		"mode_select": "Įrankis",
		"mode_fhpath": "Pencil Tool",
		"mode_line": "Line Tool",
		"mode_connect": "Connect two objects",
		"mode_rect": "Rectangle Tool",
		"mode_square": "Square Tool",
		"mode_fhrect": "Free Hand stačiakampis",
		"mode_ellipse": "Elipse",
		"mode_circle": "Circle",
		"mode_fhellipse": "Free Hand Elipsė",
		"mode_path": "Path Tool",
		"mode_shapelib": "Shape library",
		"mode_text": "Tekstas Tool",
		"mode_image": "Image Tool",
		"mode_zoom": "Zoom Įrankį",
		"mode_eyedropper": "Eye Dropper Tool",
		"no_embed": "NOTE: This image cannot be embedded. It will depend on this path to be displayed",
		"undo": "Atšaukti",
		"redo": "Atstatyti",
		"tool_source": "Taisyti Šaltinis",
		"wireframe_mode": "Wireframe Mode",
		"toggle_grid": "Show/Hide Grid",
		"clone": "Clone Element(s)",
		"del": "Delete Element(s)",
		"group_elements": "Elementų grupės",
		"make_link": "Make (hyper)link",
		"set_link_url": "Set link URL (leave empty to remove)",
		"to_path": "Convert to Path",
		"reorient_path": "Reorient path",
		"ungroup": "Išgrupuoti elementai",
		"docprops": "Document Properties",
		"imagelib": "Image Library",
		"move_bottom": "Perkelti į apačią",
		"move_top": "Perkelti į viršų",
		"node_clone": "Clone Node",
		"node_delete": "Delete Node",
		"node_link": "Link Control Points",
		"add_subpath": "Add sub-path",
		"openclose_path": "Open/close sub-path",
		"source_save": "Saugoti",
		"cut": "Cut",
		"copy": "Copy",
		"paste": "Paste",
		"paste_in_place": "Paste in Place",
		"delete": "Delete",
		"group": "Group",
		"move_front": "Bring to Front",
		"move_up": "Bring Forward",
		"move_down": "Send Backward",
		"move_back": "Send to Back"
	},
	layers: {
		"layer":"Layer",
		"layers": "Layers",
		"del": "Ištrinti Layer",
		"move_down": "Perkelti sluoksnį Žemyn",
		"new": "New Layer",
		"rename": "Pervadinti sluoksnį",
		"move_up": "Perkelti sluoksnį Up",
		"dupe": "Duplicate Layer",
		"merge_down": "Merge Down",
		"merge_all": "Merge All",
		"move_elems_to": "Move elements to:",
		"move_selected": "Move selected elements to a different layer"
	},
	config: {
		"image_props": "Image Properties",
		"doc_title": "Title",
		"doc_dims": "Canvas Dimensions",
		"included_images": "Included Images",
		"image_opt_embed": "Embed data (local files)",
		"image_opt_ref": "Use file reference",
		"editor_prefs": "Editor Preferences",
		"icon_size": "Icon size",
		"language": "Language",
		"background": "Editor Background",
		"editor_img_url": "Image URL",
		"editor_bg_note": "Note: Background will not be saved with image.",
		"icon_large": "Large",
		"icon_medium": "Medium",
		"icon_small": "Small",
		"icon_xlarge": "Extra Large",
		"select_predefined": "Pasirinkite iš anksto:",
		"units_and_rulers": "Units & Rulers",
		"show_rulers": "Show rulers",
		"base_unit": "Base Unit:",
		"grid": "Grid",
		"snapping_onoff": "Snapping on/off",
		"snapping_stepsize": "Snapping Step-Size:",
		"grid_color": "Grid color"
	},
	shape_cats: {
		"basic": "Basic",
		"object": "Objects",
		"symbol": "Symbols",
		"arrow": "Arrows",
		"flowchart": "Flowchart",
		"animal": "Animals",
		"game": "Cards & Chess",
		"dialog_balloon": "Dialog balloons",
		"electronics": "Electronics",
		"math": "Mathematical",
		"music": "Music",
		"misc": "Miscellaneous",
		"raphael_1": "raphaeljs.com set 1",
		"raphael_2": "raphaeljs.com set 2"
	},
	imagelib: {
		"select_lib": "Select an image library",
		"show_list": "Show library list",
		"import_single": "Import single",
		"import_multi": "Import multiple",
		"open": "Open as new document"
	},
	notification: {
		"invalidAttrValGiven":"Invalid value given",
		"noContentToFitTo":"No content to fit to",
		"dupeLayerName":"There is already a layer named that!",
		"enterUniqueLayerName":"Please enter a unique layer name",
		"enterNewLayerName":"Please enter the new layer name",
		"layerHasThatName":"Layer already has that name",
		"QmoveElemsToLayer":"Move selected elements to layer '%s'?",
		"QwantToClear":"Do you want to clear the drawing?\nThis will also erase your undo history!",
		"QwantToOpen":"Do you want to open a new file?\nThis will also erase your undo history!",
		"QerrorsRevertToSource":"There were parsing errors in your SVG source.\nRevert back to original SVG source?",
		"QignoreSourceChanges":"Ignore changes made to SVG source?",
		"featNotSupported":"Feature not supported",
		"enterNewImgURL":"Enter the new image URL",
		"defsFailOnSave": "NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.",
		"loadingImage":"Loading image, please wait...",
		"saveFromBrowser": "Select \"Save As...\" in your browser to save this image as a %s file.",
		"noteTheseIssues": "Also note the following issues: ",
		"unsavedChanges": "There are unsaved changes.",
		"enterNewLinkURL": "Enter the new hyperlink URL",
		"errorLoadingSVG": "Error: Unable to load SVG data",
		"URLloadFail": "Unable to load from URL",
		"retrieving": "Retrieving \"%s\"..."
	},
	confirmSetStorage: {
		message: "By default and where supported, SVG-Edit can store your editor "+
		"preferences and SVG content locally on your machine so you do not "+
		"need to add these back each time you load SVG-Edit. If, for privacy "+
		"reasons, you do not wish to store this information on your machine, "+
		"you can change away from the default option below.",
		storagePrefsAndContent: "Store preferences and SVG content locally",
		storagePrefsOnly: "Only store preferences locally",
		storagePrefs: "Store preferences locally",
		storageNoPrefsOrContent: "Do not store my preferences or SVG content locally",
		storageNoPrefs: "Do not store my preferences locally",
		rememberLabel: "Remember this choice?",
		rememberTooltip: "If you choose to opt out of storage while remembering this choice, the URL will change so as to avoid asking again."
	}
});