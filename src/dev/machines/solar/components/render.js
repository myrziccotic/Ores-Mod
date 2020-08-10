function setSolarPanelRender(id, main, second, top){
    var group = ICRender.getGroup("ic-wire");
    var model = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, -1, model);
    var render = BlockRenderer.createModel();
    
    render.addBox(1, 0, 1, 0, 0.1, 0, main, 0);
    render.addBox(0.4, 0.1, 0.4, 0.6, 0.6, 0.6, main, 0);
    render.addBox(0.6, 0.1, 0.3, 0.7, 0.6, 0.4, second, 0);
    render.addBox(0.6, 0.1, 0.6, 0.7, 0.6, 0.7, second, 0);
    render.addBox(0.3, 0.1, 0.3, 0.4, 0.6, 0.4, second, 0);
    render.addBox(0.3, 0.1, 0.6, 0.4, 0.6, 0.7, second, 0);
    render.addBox(1, 0.6, 1, 0, 0.8, 0, [[main, 0], [top, 0], [main, 0], [main, 0], [main, 0], [main, 0], [main, 0]]);
    
    model.addEntry(render);
}

