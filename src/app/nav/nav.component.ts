import { Component, OnInit } from '@angular/core';
// declare function toggleNav(): any;

function getQ() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const body = document.querySelector('body');
  burger.addEventListener('click', () => {

    // toggle nav
    nav.classList.toggle('nav-active');

    // animate links
    navLinks.forEach((link: HTMLElement, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // toggleNav();
    getQ();
  }



}
