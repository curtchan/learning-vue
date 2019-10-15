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

    /**
     * @Route("/tictactoe", name="tictactoe")
     */
    public function tictactoeAction()
    {
        return $this->render('default/tictactoe.html.twig');
    }

    /**
     * @Route("/minesweeper", name="minesweeper")
     */
    public function minesweeperAction()
    {
        return $this->render('default/minesweeper.html.twig');
    }

    /**
     * @Route("/digitalclock", name="digitalclock")
     */
    public function digitalclockAction()
    {
        return $this->render('default/digital-clock.html.twig');
    }
}