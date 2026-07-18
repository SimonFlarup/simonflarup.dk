import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-row',
  imports: [NgOptimizedImage],
  templateUrl: './image-row.html',
  styleUrl: './image-row.css',
})
export class ImageRow {}
