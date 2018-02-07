import { SnackBarComponent } from '../../../components/snack-bar/snack-bar.component';

export class ListUtil {
  static processNotification(snackBar: SnackBarComponent, count: Number, total: Number) {
    const messages = {
      'number.results.count': count,
      'number.results.total': total
    };
    if (count < total) {
      messages['number.results.advice'] = '';
    }
    snackBar.open(messages, 'info');
  }
}
