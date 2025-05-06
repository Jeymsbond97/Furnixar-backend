import {T} from  "../libs/types/common";
import express, { NextFunction, Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Error";


const memberService = new MemberService();

const furnixarController : T = {}
    furnixarController.goHome = (req: Request, res: Response) => {
        try{
            console.log("Home Page")
            res.render("home");
        }
        catch(err){
            console.log("Error, goHome:", err);
            res.redirect("/admin");
        }
    };

    furnixarController.getSignup = (req: Request, res: Response) => {
        try{
            console.log("Signup Page")
            res.render("signup");
        }
        catch(err){
            console.log("Error, getSignup:", err);
            res.redirect("/admin");
        }
    };

    furnixarController.getLogin = (req: Request, res: Response) => {
        try{
            console.log("login page")
            res.render("login");
            /* Response type => send, json, redirect, end, render */
        }
        catch(err){
            console.log("Error, getLogin:", err);
            res.redirect("/admin");
        }
    };


    furnixarController.processSignup = async (req: AdminRequest, res: Response) => {
        try{
            console.log("processSignup Page")
            const file  = req.file;
            if (!file) throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
            const newMember : MemberInput  = req.body;
            newMember.memberImage = file.path;
            newMember.memberType = MemberType.FURNIXAR;
            const result = await memberService.processSignup(newMember);
            //TODO: SESSION AUTHENTICATION

            req.session.member = result;
            req.session.save(function (){
                res.redirect("/admin/product/all");
            });
        }  catch(err){
            console.log("Error, processSignup:", err);
            const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
            res.send(`<script>alert("${message}"); window.location.replace("/admin/signup") </script>`);
        }
    };

    furnixarController.processLogin = async (req: AdminRequest, res: Response) => {
        try{
            console.log("processLogin Page")
            const input :LoginInput = req.body;
            const result  = await memberService.processLogin(input);

            //TODO: SESSION AUTHENTICATION

            req.session.member = result;
            req.session.save(function (){
                res.redirect("/admin/product/all");
            });
        }
        catch(err){
            console.log("Error, processLogin:", err);
            const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
            res.send(`<script>alert("${message}"); window.location.replace("/admin/login") </script>`);
        }
    };

    furnixarController.logout = async (req: AdminRequest, res: Response) => {
        try{
            console.log("Logout page")
            req.session.destroy(function () {
                res.redirect("/admin");
            })
        }
        catch(err){
            console.log("Error, Logout", err);
            res.redirect("/admin");
        }
    };

    furnixarController.getUsers = async (req: Request, res: Response) => {
        try{
            console.log("getUsers")
            const result = await memberService.getUsers();
            console.log("users => :", result)
            res.render('users', {users: result});
        }
        catch(err){
            console.log("Error, getUsers:", err);
            res.redirect("/admin/login");
        }
    };

    furnixarController.updateChosenUser = async (req: Request, res: Response) => {
        try{
            console.log("updateChosenUser")
            const result = await memberService.updateChosenUser(req.body);
            res.status(HttpCode.OK).json({data: result});
        }
        catch(err){
            console.log("Error, updateChosenUser:", err);
            if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        }
    };


    furnixarController.checkAuthSession = async (req: AdminRequest, res: Response) => {
        try{
            console.log("checkAuthSession")
            if(req.session?.member) res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
            else res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`)
        }
        catch(err){
            console.log("Error, checkAuthSession", err);
            res.send(err)
        }
    };

    furnixarController.verifyRestaurant = (req: AdminRequest, res: Response, next: NextFunction) => {
            if(req.session?.member?.memberType === MemberType.FURNIXAR){
                req.member = req.session.member;
                next();
            } else {
                const message = Message.NOT_AUTHENTICATED;
                res.send(`<script> alert("${message}"); window.location.replace('/admin/login'); </script`);
            }
    };



    export default furnixarController;
