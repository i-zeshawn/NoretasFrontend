import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  changeTab(tabName: string) {
    this.hideAllTabs();
    // @ts-ignore
    document.getElementById(tabName).style.display = 'block';
    // @ts-ignore
    document.getElementById(tabName + '_button').classList.add('active');
  }

  private hideAllTabs() {
    // @ts-ignore
    document.getElementById('who_we_are').style.display = 'none';
    // @ts-ignore
    document.getElementById('who_we_are_button').className = 'tab';
    // @ts-ignore
    document.getElementById('our_mission').style.display = 'none';
    // @ts-ignore
    document.getElementById('our_mission_button').className = 'tab';
    // @ts-ignore
    document.getElementById('our_vision').style.display = 'none';
    // @ts-ignore
    document.getElementById('our_vision_button').className = 'tab';
    // @ts-ignore
    document.getElementById('honor_awards').style.display = 'none';
    // @ts-ignore
    document.getElementById('honor_awards_button').className = 'tab';

  }
}
