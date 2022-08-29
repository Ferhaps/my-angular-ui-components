import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateFormatter' })
export class DateFormatterPipe implements PipeTransform {

  transform(dateString: string, format: string = ''): string {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);

    if (format == 'd') {
      return String(date.getDate()).padStart(2, '0') + '.' +
        String(date.getMonth() + 1).padStart(2, '0') + '.' +
        String(date.getFullYear()).padStart(2, '0');
    }

    if (format == 'h') {
      return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
    }
    
    return String(date.getHours()).padStart(2, '0') + ':' +
      String(date.getMinutes()).padStart(2, '0') + '\xa0\xa0\xa0' +
      String(date.getDate()).padStart(2, '0') + '.' +
      String(date.getMonth() + 1).padStart(2, '0') + '.' +
      String(date.getFullYear()).padStart(2, '0');
  }
}

@Pipe({ name: 'defaultImg' })
export class DefaultImamgePipe implements PipeTransform {
  private defaultImageUrl = '/assets/icons/profileAvatar.svg';

  transform(value: string): string {
    return value ? value : this.defaultImageUrl;
  }
}

@Pipe({ name: 'formatToken' })
export class TokenFormatterPipe implements PipeTransform {
  transform(token: string | undefined): string {
    if (token) {
      const tokenLength = token.length;
      let slicedToken = token.slice(tokenLength - 4, tokenLength);
      return '****' + slicedToken;
    }
    return '-';
  }
}

@Pipe({ name: 'blankFiller' })
export class WhiteSpaceFillerPipe implements PipeTransform {
  transform(value: any): string {
    return value ? value : '-';
  }
}