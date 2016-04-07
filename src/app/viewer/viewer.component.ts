import {Component, ViewChild} from 'angular2/core';
import {AppState} from '../app.service';


@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'viewer',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
    ],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [
    ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require('./viewer.scss')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./viewer.html')
})
export class Viewer {
    @ViewChild('cesiumViewer') container;
    public viewer: Cesium.Viewer;
    get x() {
        return this._x;
    }
    set x(value: number) {
        this._x = value;
        this.refreshPosition();
    }
    get y() {
        return this._y;
    }
    set y(value: number) {
        this._y = value;
        this.refreshPosition();
    }
    get z() {
        return this._z;
    }
    set z(value: number) {
        this._z = value;
        this.refreshPosition();
    }
    // Set our default values
    entity: Cesium.Entity;
    private _x: number = -75.1641667;
    private _y: number = 39.9522222;
    private _z: number = 300000.0;
    // TypeScript public modifiers
    constructor(public appState: AppState) {

    }

    ngOnInit() {
        console.log('hello `Viewer` component');
    
        // this.title.getData().subscribe(data => this.data = data);
        this.viewer = new Cesium.Viewer('cesiumContainer');
        let a: any = {
            position: Cesium.Cartesian3.fromDegrees(this.x, this.y, this.z),
            label: {
                text: 'test',
                scale: 1
            }
        }
        this.entity = <Cesium.Entity>this.viewer.entities.add(a);
        //this.entity.label.scale = <any>(1);
        console.log(this.entity);
        //this.entity.label.scale = this.scale;
    }

    scale(value: string) {
        if (value.trim() === "") { return; }
        this.entity.label.scale = <any>parseFloat(value);
    }

    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
    }

    private refreshPosition() {
        this.entity.position = <any>Cesium.Cartesian3.fromDegrees(this._x, this._y, this._z);
    }

}
