import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

@Component({
  selector: 'todo-text-input',
  template: `
  <input
    [ngClass]='className'
    [(ngModel)]="text"
    (keydown.enter)="_handleEnter()"
    (keydown.esc)="_handleEsc()"
    placeholder="{{placeholder}}"
  />
  `
})
export default class TodoTextInput {
  @Input() placeholder: string;
  @Input() className: string;
  @Output() onCancel: EventEmitter<string> = new EventEmitter();
  @Output() onDelete: EventEmitter<string> = new EventEmitter();
  @Output() onSave: EventEmitter<string> = new EventEmitter();

  text :string;

  _handleEnter() {
    console.log('enter');
  }

  _handleEsc() {
    console.log('esc');
  }
}



/*export default class TodoTextInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    initialValue: PropTypes.string,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }

  state = {
    isEditing: false,
    text: this.props.initialValue || '',
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this).focus()
  }

  _commitChanges = () => {
    var newText = this.state.text.trim()
    if (this.props.onDelete && newText === '') {
      this.props.onDelete()
    } else if (this.props.onCancel && newText === this.props.initialValue) {
      this.props.onCancel()
    } else if (newText !== '') {
      this.props.onSave(newText)
      this.setState({text: ''})
    }
  }

  _handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  _handleKeyDown = (e) => {
    if (this.props.onCancel && e.keyCode === ESC_KEY_CODE) {
      this.props.onCancel()
    } else if (e.keyCode === ENTER_KEY_CODE) {
      this._commitChanges()
    }
  }

  render () {
    return (
      <input
        className={this.props.className}
        onChange={this._handleChange}
        onKeyDown={this._handleKeyDown}
        placeholder={this.props.placeholder}
        value={this.state.text}
      />
    )
  }
}*/
