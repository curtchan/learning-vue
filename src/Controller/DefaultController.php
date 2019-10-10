<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(name="default_")
 */
class DefaultController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/todolist", name="todolist")
     */
    public function todolistAction()
    {
        return $this->render('default/todolist.html.twig');
    }
}