import { webImg } from '../components/examples/examples.component';


export class Website {
  constructor(
    public id: number,
    public name: string,
    public images: webImg[],
    public type: string,
    public description: string[],
    public link: string,
    public features: string[],
  ) {
  }
}
