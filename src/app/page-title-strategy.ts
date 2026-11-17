import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);
  private translation?: Subscription;

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.translation?.unsubscribe();
    const key = this.buildTitle(snapshot);

    if (!key) {
      this.title.setTitle('Simon Holland Flarup');
      return;
    }

    this.translation = this.translate.stream(key)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((pageName: string) => {
        this.title.setTitle(`${pageName} | Simon Holland Flarup`);
      });
  }
}
