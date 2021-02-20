import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatBadgeModule,
    MatListModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatSlideToggleModule,
    MatProgressSpinnerModule, MatInputModule, MatTooltipModule, MatSnackBarModule,
    MatDialogModule, MatExpansionModule, MatDividerModule, MatGridListModule,
    MatTreeModule, MatMenuModule, MatTabsModule, MatTableModule, MatPaginatorModule,
    MatSortModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatProgressBarModule, MatStepperModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule,
        MatSidenavModule, MatListModule, FormsModule, MatCardModule, MatFormFieldModule,
        MatProgressSpinnerModule, MatInputModule, MatTooltipModule, MatSnackBarModule,
        MatDialogModule, LayoutModule, MatExpansionModule, MatDividerModule,
        MatGridListModule, MatTreeModule, MatMenuModule, MatTabsModule, MatTableModule,
        MatPaginatorModule, MatSortModule, MatSelectModule, MatRadioModule, MatCheckboxModule,
        MatDatepickerModule, MatSlideToggleModule, MatBadgeModule, DragDropModule, MatProgressBarModule, MatStepperModule
    ],
    exports: [MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule,
        MatSidenavModule, MatListModule, FormsModule, MatCardModule, MatFormFieldModule,
        MatProgressSpinnerModule, MatInputModule, MatTooltipModule, MatSnackBarModule,
        MatDialogModule, LayoutModule, MatExpansionModule, MatDividerModule,
        MatGridListModule, MatTreeModule, MatMenuModule, MatTabsModule, MatTableModule,
        MatPaginatorModule, MatSortModule, MatSelectModule, MatRadioModule, MatCheckboxModule,
        MatDatepickerModule, MatSlideToggleModule, MatBadgeModule, DragDropModule, MatProgressBarModule, MatStepperModule
    ],
})

export class MaterialDesignModule { }