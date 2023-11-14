<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use \App\Models\Employee;
use OpenAdmin\Admin\Grid\Displayers\Actions\DropdownActions;


class EmployeeController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Employee';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Employee());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('department_name', __('Department Name'));
        $grid->column('join_date', __('Join date'));
        $grid->column('created_at', __('Created at'));

        $grid->setActionClass(DropdownActions::class);


        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Employee::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('department_name', __('Department Name'));
        $show->field('join_date', __('Join date'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Employee());

        $form->text('name', __('Name'));
        $form->text('department_name', __('Department Name'));
        $form->date('join_date', __('Join date'))->default(date('Y-m-d'));

        return $form;
    }
}
