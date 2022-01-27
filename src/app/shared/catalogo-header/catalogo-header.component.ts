import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceI } from '../../services/service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo-header',
  templateUrl: './catalogo-header.component.html',
  styleUrls: ['./catalogo-header.component.scss']
})
export class CatalogoHeaderComponent implements OnInit {

  @Input() service!: ServiceI;
  @Input() selected!: any;
  @Input() addComponent!: any;
  @Input() editComponent!: any;

  action: string = "vertical_align_bottom";

  constructor(
    private router: Router,
    private _dialog: MatDialog) {
  }

  ngOnInit(): void { }



  add() {
    const dialogRef = this._dialog.open(this.addComponent, {
      data: {
        "service": this.service,

      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  refresh() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`${this.service.path}`])
    })
  }

  changeStatus() {
    if (this.selected != undefined) {

      let status = this.selected.status ? 'baja' : 'alta'


      Swal.fire({
        title: 'Estas seguro?',
        text: `Esta estacion sera dada de ${status}`,
        iconHtml: '<img src="../../../assets/warning.png">',
        showCancelButton: true,
        confirmButtonText: `Dar de ${status}`
      }).then((result: any) => {

        if (result.isConfirmed) {

          this.service.changeStatus(this.selected.uid, !this.selected.status)
            .subscribe((res: any) => {
              this.refresh();

              Swal.fire(
                'Confirmado',
                `${res.msg}`,
                'success'
              )


            })

        } else {
          return;
        }
      })


      return;
    }


    Swal.fire({
      position: 'top-end',
      iconHtml: '<img src="../../../assets/warning.png">',
      title: 'Seleccione una estación',
      showConfirmButton: false,
      timer: 1500
    })

    return;


  }


  edit() {


    if (this.selected != undefined) {
      const dialogRef = this._dialog.open(this.editComponent, {
        data: {
          "selected": this.selected,
          "service": this.service
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

      return;
    }


    Swal.fire({
      position: 'top-end',
      iconHtml: '<img src="../../../assets/warning.png">',
      title: 'Seleccione un producto',
      showConfirmButton: false,
      timer: 1500
    })

    return;
  }

  getTitle = () => this.service.title;

  /** Styles **/


  statusClass(): string {
    if (this.selected == undefined) {
      return '';
    }

    if (this.selected.status) {
      return 'down';
    }


    return 'up';

  }


  editClass(): string {
    return this.selected != undefined ? 'edit' : '';
  }

}

